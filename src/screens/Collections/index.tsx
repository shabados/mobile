import { FlatList } from 'react-native'

import Container from '../../components/Container'
import { CollectionsStackScreenProps } from '../../types/navigation'
import Item from './Item'
import { Folder, FolderContent, FolderItem } from './types'
import { getIsFolder } from './utils'

export type CollectionsScreenProps = CollectionsStackScreenProps<'Collections.List'>

const CollectionsScreen = ( {
  navigation,
  route: { params: { items } },
}: CollectionsScreenProps ) => {
  const openContent = ( { id, type }: FolderContent ) => navigation.navigate(
    'Root.Home',
    { screen: 'Home.Tab.Gurbani', params: { screen: 'Gurbani.View', params: { id, type } } },
  )

  const openFolder = ( folder: Folder ) => navigation.push( 'Collections.List', folder )

  const onItemPress = ( item: FolderItem ) => ( getIsFolder( item )
    ? openFolder( item as Folder )
    : openContent( item as FolderContent ) )

  return (
    <Container>
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
    </Container>
  )
}

export default CollectionsScreen
