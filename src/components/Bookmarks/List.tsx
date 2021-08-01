import React from 'react'
import { FlatList, View, StyleSheet } from 'react-native'
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'

import Screens from '../../lib/screens'
import { NavigationParams } from '../../types/navigation'
import Colors from '../../themes/colors'
import { ContentTypes } from '../../types/data'

import { checkIsFolder } from './utils'
import Item from './Item'

type Route = RouteProp<NavigationParams, Screens.Bookmarks>
type Navigation = StackNavigationProp<NavigationParams, Screens.Bookmarks>

const styles = StyleSheet.create( {
  screen: {
    flex: 1,
    backgroundColor: Colors.ModalSheet,
  },
} )

const BookmarksList = () => {
  const route = useRoute<Route>()
  const navigation = useNavigation<Navigation>()

  const { folderData } = route.params

  const onItemPress = ( isFolder: boolean, name: string, id: string, type: ContentTypes ) => {
    if ( !isFolder ) {
      console.log( `Navigating to ${Screens.Gurbani} ${id} ${type} ${name}` )
      navigation.navigate( Screens.Gurbani, { id, type } )
    }

    return navigation.push( Screens.Bookmarks, {
      folderData:
          folderData.find( ( folder ) => folder.name === name )?.bookmarks
          || folderData,
      currentFolder: name,
    } )
  }

  return (
    <View style={styles.screen}>
      <FlatList
        keyExtractor={( { name } ) => name}
        data={folderData}
        renderItem={( { item } ) => {
          const isFolder = checkIsFolder( item )
          return (
            <Item
              title={item.name}
              isFolder={isFolder}
              onPress={() => onItemPress( isFolder, item.name, item.id, item.type )}
            />
          )
        }}
      />
    </View>
  )
}

export default BookmarksList
