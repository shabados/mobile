import { RouteProp, useNavigation, useRoute } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'
import React from 'react'
import { Alert } from 'react-native'

import { BookmarksList } from '../../components/Bookmarks'
import Container from '../../components/Container'
import Screens from '../../lib/screens'
import { NavigationParams } from '../../types/navigation'

type Route = RouteProp<NavigationParams, Screens.Bookmarks>
type Navigation = StackNavigationProp<NavigationParams, Screens.Bookmarks>

const BookmarksScreen = () => {
  const route = useRoute<Route>()
  const navigation = useNavigation<Navigation>()

  const { folderData } = route.params

  const onItemPress = ( isFolder: boolean, name: string ) => {
    if ( isFolder ) {
      navigation.push( Screens.Bookmarks,
        {
          folderData:
          folderData.find( ( folder ) => folder.name === name )?.bookmarks
          || folderData,
          currentFolder: name,
        } )
    } else {
      Alert.alert( `you clicked on ${name}` )
    }
  }

  return (
    <Container>
      <BookmarksList data={folderData} onItemPress={onItemPress} />
    </Container>
  )
}

export const bookmarksScreen = {
  name: Screens.Bookmarks,
  component: BookmarksScreen,
  options: {
    cardStyle: { backgroundColor: 'transparent' },
  },
}

export default BookmarksScreen
