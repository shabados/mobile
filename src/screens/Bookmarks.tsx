import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { Button } from 'react-native'
import { createNativeStackNavigator } from 'react-native-screens/native-stack'

import BookmarksList from '../components/BookmarksList'
import {
  BookmarksNavigatorParams,
  BookmarksNavigatorRoutes,
} from '../types/bookmarks'
import BookMarksMockData from '../mock-data/bookmarks'

const Navigator = createNativeStackNavigator<BookmarksNavigatorParams>()

const Bookmarks = () => {
  const navigation = useNavigation()

  return (
    <Navigator.Navigator
      screenOptions={() => ( {
        headerLargeTitle: true,
        headerRight: () => (
          <Button title="Done" onPress={() => navigation.goBack()} />
        ),
      } )}
    >
      <Navigator.Screen
        component={BookmarksList}
        name={BookmarksNavigatorRoutes.bookmarks}
        initialParams={{ data: BookMarksMockData }}
        options={( { route } ) => ( {
          title: route.params?.folder ?? 'Bookmarks',
        } )}
      />
    </Navigator.Navigator>
  )
}

export default Bookmarks
