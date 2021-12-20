import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { fireEvent, render, waitForElementToBeRemoved } from '@testing-library/react-native'
import { toUnicode } from 'gurmukhi-utils'
import { Text } from 'react-native'

import * as factories from '../../../test/factories'
import withContexts from '../../components/with-contexts'
import * as collections from '../../services/data/collections'
import { CollectionData } from '../../types/data'
import Screens, { AppStackParams } from '../screens'
import { collectionsScreen } from '.'

const setup = async ( data: CollectionData[] ) => {
  jest.spyOn( collections, 'getCollections' ).mockResolvedValue( data )

  const { Navigator, Screen } = createStackNavigator<AppStackParams>()

  const queries = render( withContexts(
    <NavigationContainer>
      <Navigator>
        <Screen {...collectionsScreen} />
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

describe( '<CollectionsScreen />', () => {
  describe( 'on mount', () => {
    it( 'should display a list of collections retrieved', async () => {
      const collections = factories.collection.buildList( 5 )

      const { queryByText } = await setup( collections )

      collections.map(
        ( { nameGurmukhi } ) => expect( queryByText( toUnicode( nameGurmukhi ) ) ).toBeTruthy(),
      )
    } )
  } )

  describe( 'given a press on a folder item', () => {
    it( 'should display the collection\'s list of items', async () => {
      const items = factories.collection.buildList( 5 )
      const collection = factories.collection.build( { items } )
      const { getByText, queryByText } = await setup( [ collection ] )

      fireEvent.press( getByText( toUnicode( collection.nameGurmukhi ) ) )

      Object.values( collection.items! ).forEach( ( { nameGurmukhi }: CollectionData ) => expect(
        queryByText( toUnicode( nameGurmukhi ) ),
      ).toBeTruthy() )
    } )
  } )

  describe( 'given a press on a content item', () => {
    // ? Flaky - Does react-query+- dedupe cause this to fail sometimes
    it( 'should navigate to the Gurbani screen', async () => {
      const collection = factories.collection.build( { items: undefined } )
      const { getByText, findByText } = await setup( [ collection ] )

      fireEvent.press( getByText( toUnicode( collection.nameGurmukhi ) ) )

      expect( await findByText( collection.id ) ).toBeTruthy()
    } )
  } )
} )
