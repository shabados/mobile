import { FlatList, StyleSheet, View } from 'react-native'

import Colors from '../../themes/colors'
import { CollectionsStackScreenProps } from '../../types/navigation'
import Item from './Item'
import { Folder, FolderContent, FolderItem } from './types'
import { getIsFolder } from './utils'

const styles = StyleSheet.create( {
  root: {
    flex: 1,
    backgroundColor: Colors.ModalSheet,
  },
} )

export type CollectionsScreenProps = CollectionsStackScreenProps<'Collections.List'>

const CollectionsScreen = ( {
  navigation,
  route: { params: { items } },
}: CollectionsScreenProps ) => {
  const openContent = ( { id, type }: FolderContent ) => navigation.navigate(
    'Root.Home',
    { screen: 'Home.Gurbani', params: { id, type } },
  )

  const openFolder = ( { items }: Folder ) => navigation.push( 'Collections.List', { items } )

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

export default CollectionsScreen
