import React from 'react'
import { FlatList, View, Alert } from 'react-native'
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'

import Screens from '../../lib/screens'
import { NavigationParams } from '../../types/navigation'

import { checkIsFolder } from './utils'
import Item from './Item'

type Route = RouteProp<NavigationParams, Screens.Bookmarks>
type Navigation = StackNavigationProp<NavigationParams, Screens.Bookmarks>

const BookmarksList = () => {
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
    <View>
      <FlatList
        keyExtractor={( { name } ) => name}
        data={folderData}
        renderItem={( { item } ) => {
          const isFolder = checkIsFolder( item )
          return (
            <Item
              title={item.name}
              isFolder={isFolder}
              onPress={() => onItemPress( isFolder, item.name )}
            />
          )
        }}
      />
    </View>
  )
}

export default BookmarksList
