import React from 'react'
import { View } from 'react-native'

import { Folder, FolderItem } from './types'
import { checkIsFolder } from './utils'
import Item from './Item'

type BookmarksListProps = {
  data: ( Folder| FolderItem )[],
  onItemPress: ( isFolder: boolean, name: string ) => void,
}

const BookmarksList = ( { data, onItemPress }: BookmarksListProps ) => (
  <View>
    {data.map( ( item ) => {
      const isFolder = checkIsFolder( item )
      return (
        <Item
          item={item}
          isFolder={isFolder}
          onPress={() => onItemPress( isFolder, isFolder ? item?.name : item )}
        />
      )
    } )}
  </View>
)

export default BookmarksList
