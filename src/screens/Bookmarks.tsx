import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { Button } from 'react-native'
import { createNativeStackNavigator } from 'react-native-screens/native-stack'

import { BookmarksList } from '../components/BookmarksList'
import { BookmarksNavigatorParams, BookmarksNavigatorRoutes, BookmarkIcon, Folder } from '../types/bookmarks'

export const MockData: Folder[] = [
  {
    name: 'bookmarks section 1',
    icon: BookmarkIcon.folder,
    items: [
      {
        icon: BookmarkIcon.shabad,
        name: 'section 1 child 1',
      },
      {
        icon: BookmarkIcon.shabad,
        name: 'section 1 child 2',
      },
    ],
  },
  {
    name: 'bookmarks section 2',
    icon: BookmarkIcon.folder,
    items: [
      {
        icon: BookmarkIcon.bani,
        name: 'section 1 child 1',
      },
      {
        icon: BookmarkIcon.bani,
        name: 'section 1 child 2',
      },
    ],
  },
  {
    name: 'top level item',
    icon: BookmarkIcon.bani,
  },
]

const Navigator = createNativeStackNavigator<BookmarksNavigatorParams>()

const Bookmarks = () => {
  const navigation = useNavigation()

  return (
    <Navigator.Navigator
      screenOptions={() => ( {
        headerLargeTitle: true,
        headerRight: () => (
          <Button
            title="Done"
            onPress={() => navigation.goBack()}
          />
        ),
      } )}
    >
      <Navigator.Screen
        component={BookmarksList}
        name={BookmarksNavigatorRoutes.bookmarks}
        initialParams={{ data: MockData }}
        options={( { route } ) => ( { title: route.params?.folder ?? 'Bookmarks' } )}
      />
    </Navigator.Navigator>
  )
}
export { Bookmarks }
