import React from 'react'
import { Button } from 'react-native'
import { createNativeStackNavigator } from 'react-native-screens/native-stack'

import { BookmarksList } from '../components/BookmarksList'
import Screens from '../lib/screens'
import { BookmarksNavigatorParams, BookmarksNavigatorRoutes, BookmarkTypes, FolderData } from '../types/bookmarks'

export const MockData: FolderData[] = [
  {
    folderName: 'bookmarks section 1',
    type: BookmarkTypes.folder,
    items: [
      {
        type: BookmarkTypes.shabad,
        name: 'section 1 child 1',
      },
      {
        type: BookmarkTypes.shabad,
        name: 'section 1 child 2',
      },
    ],
  },
  {
    folderName: 'bookmarks section 2',
    type: BookmarkTypes.folder,
    items: [
      {
        type: BookmarkTypes.bani,
        name: 'section 1 child 1',
      },
      {
        type: BookmarkTypes.bani,
        name: 'section 1 child 2',
      },
    ],
  },
]

const Navigator = createNativeStackNavigator<BookmarksNavigatorParams>()

const Bookmarks = () => (
  <Navigator.Navigator
    screenOptions={( { navigation } ) => ( {
      headerLargeTitle: true,
      headerRight: () => (
        <Button
          title="Done"
          onPress={() => {
            navigation?.navigate( Screens.Home )
          }}
        />
      ),
    } )}
  >
    <Navigator.Screen
      component={BookmarksList}
      name={BookmarksNavigatorRoutes.bookmarks}
      initialParams={{ folderData: MockData }}
      options={( { route } ) => ( { title: route.params?.folder ?? 'Bookmarks' } )}
    />
  </Navigator.Navigator>
)

export { Bookmarks }
