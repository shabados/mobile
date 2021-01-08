import React from 'react'
import { Pressable, StyleSheet, Text } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

import Colours from '../../themes/colours'

import { Folder, FolderItem } from './types'

const styles = StyleSheet.create( {
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 5,
    backgroundColor: Colours.White,
  },
} )

type BookmarkListItemProps = {
  item: Folder | FolderItem,
  isFolder: boolean,
  onPress: () => void,
}

const BookmarkListItem = ( { item, isFolder, onPress }: BookmarkListItemProps ) => (
  <Pressable style={styles.container} onPress={onPress}>
    <Text>{item?.name ?? item}</Text>
    {isFolder && <Icon name="chevron-right" size={25} />}
  </Pressable>
)

export default BookmarkListItem
