import { StackScreenProps } from '@react-navigation/stack'
import { FlatList, StyleSheet, View } from 'react-native'

import Colors from '../../themes/colors'
import Screens, { AppStackParams } from '../screens'
import Item from './Item'
import { CollectionScreens, CollectionsStackParams } from './screens'
import { Folder, FolderContent, FolderItem } from './types'
import { getIsFolder } from './utils'

const styles = StyleSheet.create( {
  root: {
    flex: 1,
    backgroundColor: Colors.ModalSheet,
  },
} )

type StackParams = CollectionsStackParams & AppStackParams
export type ItemsProps = StackScreenProps<StackParams, CollectionScreens.List>

const Items = ( {
  navigation,
  route: { params: { items } },
}: ItemsProps ) => {
  const openContent = ( { id, type }: FolderContent ) => navigation.navigate(
    Screens.Gurbani,
    { id, type },
  )

  const openFolder = ( { items }: Folder ) => navigation.push( CollectionScreens.List, { items } )

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
