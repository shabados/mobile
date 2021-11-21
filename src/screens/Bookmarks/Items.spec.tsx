import React from 'react'
import { render, fireEvent } from '@testing-library/react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import { ContentType } from '../../types/data'

import Items, { ItemsProps } from './Items'
import { BookmarksScreens, BookmarksStackParams } from './screens'
import { Folder, FolderItem } from './types'

const { Navigator, Screen } = createStackNavigator<BookmarksStackParams>()

const getFolderItems = (): FolderItem[] => [
  {
    id: '1',
    name: 'folder 1',
    items: [
      { id: '123', name: 'shabad 3', type: ContentType.Shabad },
      { id: '124', name: 'bookmark 2', type: ContentType.Bookmark },
      { id: '125', name: 'ang 4', type: ContentType.Ang },
      { id: '234', name: 'nested folder 3', items: [ { id: '34', name: 'shabad 4', type: ContentType.Shabad } ] },
    ],
  },
  {
    id: '4',
    name: 'content bookmark',
    type: ContentType.Bookmark,
  },
]

const setup = ( initialParams?: ItemsProps['route']['params'] ) => render(
  <NavigationContainer>
    <Navigator>
      <Screen name={BookmarksScreens.List} component={Items} initialParams={initialParams} />
    </Navigator>
  </NavigationContainer>,
)

describe( '<Items />', () => {
  it( 'should render list of bookmark items', async () => {
    const items = getFolderItems()
    const { queryByText, unmount } = setup( { items } )

    items.forEach( ( { name } ) => {
      expect( queryByText( name ) ).toBeTruthy()
    } )

    unmount()
  } )

  it( 'should open a folder', async () => {
    const items = getFolderItems()
    const { getByText, queryByText, unmount } = setup( { items } )
    const firstFolder = items[ 0 ] as Folder

    const folderItem = getByText( firstFolder.name )
    fireEvent.press( folderItem )

    firstFolder.items.forEach( ( { name } ) => {
      expect( queryByText( name ) ).toBeTruthy()
    } )

    unmount()
  } )
} )
