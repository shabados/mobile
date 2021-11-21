import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { useQuery } from 'react-query'
import { Text } from 'react-native'

import Screens from '../../lib/screens'
import Container from '../../components/Container'
import { getBookmarks } from '../../data'

import Items from './Items'
import Navbar from './Navbar'
import { BookmarksScreens, BookmarksStackParams } from './screens'
import { bookmarksToFolder } from './utils'

const { Screen, Navigator } = createStackNavigator<BookmarksStackParams>()

const bookmarksQuery = () => getBookmarks().then( bookmarksToFolder )

const BookmarksScreen = () => {
  const { data: items } = useQuery( 'bookmarks-screen', bookmarksQuery )

  if ( !items ) return <Text>Loading</Text>

  return (
    <Container>
      <Navigator>
        <Screen name={BookmarksScreens.List} component={Items} initialParams={{ items }} />
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
