import React from 'react'
import { FlatList, StyleSheet, View } from 'react-native'
import { StackScreenProps } from '@react-navigation/stack'

import Screens, { AppStackParams } from '../screens'
import Colors from '../../themes/colors'

import { BookmarksScreens, BookmarksStackParams } from './screens'
import { getIsFolder } from './utils'
import Item from './Item'
import { Folder, FolderContent, FolderItem } from './types'

const styles = StyleSheet.create( {
  root: {
    flex: 1,
    backgroundColor: Colors.ModalSheet,
  },
} )

type StackParams = BookmarksStackParams & AppStackParams
export type ItemsProps = StackScreenProps<StackParams, BookmarksScreens.List>

const Items = ( {
  navigation,
  route: { params: { items } },
}: ItemsProps ) => {
  const openContent = ( { id, type }: FolderContent ) => navigation.navigate(
    Screens.Gurbani,
    { id, type },
  )

  const openFolder = ( { items }: Folder ) => navigation.push( BookmarksScreens.List, { items } )

  const onItemPress = ( item: FolderItem ) => ( getIsFolder( item )
    ? openFolder( item as Folder )
    : openContent( item as FolderContent ) )

  return (
    <View style={styles.root}>
      <FlatList
        keyExtractor={( { id } ) => id}
        data={items}
        renderItem={( { item } ) => (
          <Item
            title={item.name}
            icon={getIsFolder( item ) ? 'chevron-right' : undefined}
            onPress={() => onItemPress( item )}
          />
        )}
      />
    </View>
  )
}

export default Items
