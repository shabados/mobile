import React from 'react'
import { FlatList, FlatListProps, View } from 'react-native'

import { Folder } from './types'
import { checkIsFolder } from './utils'
import Item from './Item'

type BookmarksListProps = {
  data: Folder[],
  onItemPress: ( isFolder: boolean, name: string ) => void,
} & Omit<FlatListProps<Folder>, 'renderItem' | 'keyExtractor' | 'renderItem'>

const BookmarksList = ( { data, onItemPress }: BookmarksListProps ) => (
  <View>
    <FlatList
      keyExtractor={( { name } ) => name}
      data={data}
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

export default BookmarksList
