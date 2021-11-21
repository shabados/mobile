import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { fireEvent, render, waitForElementToBeRemoved } from '@testing-library/react-native'
import { toUnicode } from 'gurmukhi-utils'
import { Text } from 'react-native'

import * as factories from '../../../test/factories'
import withContexts from '../../components/with-contexts'
import * as bookmarks from '../../data/bookmarks'
import Screens, { AppStackParams } from '../screens'
import { BookmarkData } from '../../types/data'
import { bookmarkDataToItems } from '../../../test/factories'

import { bookmarksScreen } from '.'

const setup = async ( data: BookmarkData[] ) => {
  jest.spyOn( bookmarks, 'getBookmarks' ).mockResolvedValue( data )

  const { Navigator, Screen } = createStackNavigator<AppStackParams>()

  const queries = render( withContexts(
    <NavigationContainer>
      <Navigator>
        <Screen {...bookmarksScreen} />
        <Screen name={Screens.Gurbani}>
          {( { route: { params: { id } } } ) => <Text>{id}</Text>}
        </Screen>
      </Navigator>
    </NavigationContainer>,
  ) )

  const { getByText } = queries
  await waitForElementToBeRemoved( () => getByText( 'Loading' ) )

  return queries
}

describe( '<BookmarksScreen />', () => {
  describe( 'on mount', () => {
    it( 'should display a list of bookmarks retrieved', async () => {
      const bookmarks = factories.bookmarkItem.buildList( 5 )

      const { queryByText } = await setup( bookmarks )

      bookmarks.map(
        ( { nameGurmukhi } ) => expect( queryByText( toUnicode( nameGurmukhi ) ) ).toBeTruthy(),
      )
    } )
  } )

  describe( 'given a press on a folder item', () => {
    it( 'should display the folder\'s list of bookmarks', async () => {
      const items = bookmarkDataToItems( factories.bookmarkItem.buildList( 5 ) )
      const bookmark = factories.bookmarkItem.build( { items } )
      const { getByText, queryByText } = await setup( [ bookmark ] )

      fireEvent.press( getByText( toUnicode( bookmark.nameGurmukhi ) ) )

      Object.values( bookmark.items! ).forEach( ( { nameGurmukhi }: BookmarkData ) => expect(
        queryByText( toUnicode( nameGurmukhi ) ),
      ).toBeTruthy() )
    } )
  } )

  describe( 'given a press on a content item', () => {
    // ? Flaky - Does react-query+- dedupe cause this to fail sometimes
    it( 'should navigate to the Gurbani screen', async () => {
      const bookmark = factories.bookmarkItem.build( { items: undefined } )
      const { getByText, findByText } = await setup( [ bookmark ] )

      fireEvent.press( getByText( toUnicode( bookmark.nameGurmukhi ) ) )

      expect( await findByText( bookmark.id ) ).toBeTruthy()
    } )
  } )
} )
