import React from 'react'
import { RouteProp, useRoute } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import { BookmarksList } from '../../components/Bookmarks'
import Container from '../../components/Container'
import Screens from '../../lib/screens'
import { NavigationParams } from '../../types/navigation'

import Navbar from './Navbar'

type Route = RouteProp<NavigationParams, Screens.Bookmarks>

const { Screen, Navigator } = createStackNavigator()

const BookmarksScreen = () => {
  const route = useRoute<Route>()

  const { folderData } = route.params

  return (
    <Container>
      <Navigator>
        <Screen name={Screens.Bookmarks} component={BookmarksList} initialParams={folderData} />
      </Navigator>
    </Container>
  )
}

export const bookmarksScreen = {
  name: Screens.Bookmarks,
  component: BookmarksScreen,
  options: {
    header: Navbar,
    cardStyle: { backgroundColor: 'transparent' },
  },
}

export default BookmarksScreen
