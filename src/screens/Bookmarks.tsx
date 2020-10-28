import { RouteProp } from '@react-navigation/native'
import React from 'react'
import { Button } from 'react-native'
import { NativeStackNavigatorProps } from 'react-native-screens/lib/typescript/types'
import { createNativeStackNavigator } from 'react-native-screens/native-stack'

import { BookmarksList } from '../components/BookmarksList'
import Screens from '../lib/screens'

export type BookmarksNavigatorParams = {
  BookmarksList: {folder?: string},
}
const Navigator = createNativeStackNavigator<BookmarksNavigatorParams>()

const Bookmarks = ( { navigation }: NativeStackNavigatorProps ) => (
  <Navigator.Navigator
    screenOptions={{
      headerLargeTitle: true,
      headerRight: () => (
        <Button
          title="Done"
          onPress={() => {
            navigation?.navigate( Screens.Home )
          }}
        />
      ),
    }}
  >
    <Navigator.Screen component={BookmarksList} name="BookmarksList" options={( { route } ) => ( { title: route.params?.folder ?? 'Bookmarks' } )} />
  </Navigator.Navigator>
)

export { Bookmarks }
