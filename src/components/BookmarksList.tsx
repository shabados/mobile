import React from 'react'
import { Pressable, StyleSheet, Text, View } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

import Colours from '../themes/colours'
import { Folder, FolderItem, checkIsFolder } from '../types/bookmarks'

const styles = StyleSheet.create( {
  BookmarkContainer: {
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

const BookmarkListItem = ( {
  item,
  isFolder,
  onPress,
}: BookmarkListItemProps ) => (
  <Pressable style={styles.BookmarkContainer} onPress={onPress}>
    <Text>{item?.name ?? item}</Text>
    {isFolder && <Icon name="chevron-right" size={25} />}
  </Pressable>
)

type BookmarksListProps = {
  data: ( Folder| FolderItem )[],
  onItemPress: ( isFolder: boolean, name: string ) => void,
}
const BookmarksList = ( { data, onItemPress }: BookmarksListProps ) => (
  <View>
    {data.map( ( item ) => {
      const isFolder = checkIsFolder( item )
      return (
        <BookmarkListItem
          item={item}
          isFolder={isFolder}
          onPress={() => onItemPress( isFolder, isFolder ? item?.name : item )}
        />
      )
    } )}
  </View>
)

export { BookmarkListItem, BookmarksList }
