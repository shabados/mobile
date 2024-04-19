import { FlashList } from '@shopify/flash-list'
import { useRouter } from 'expo-router'
import { toUnicode } from 'gurmukhi-utils'
import { match } from 'ts-pattern'

import Container from '~//components/atoms/Container'
import ItemSeparator from '~//components/atoms/ItemSeparator'
import { useCollection } from '~/services/data/collections'
import { CollectionItem } from '~/types/data'

import Item from './Item'

export const getDisplayName = ( item: CollectionItem ) => match( item )
  .with( { type: 'folder' }, ( folder ) => match( folder )
    .with( { origin: 'preset' }, ( folder ) => toUnicode( folder.nameGurmukhi ) )
    .with( { origin: 'user' }, ( folder ) => folder.name )
    .exhaustive() )
  .with( { type: 'shabad' }, ( shabad ) => shabad.lineId )
  .with( { type: 'ang' }, ( ang ) => ang.lineId )
  .with( { type: 'bani' }, ( bani ) => toUnicode( bani.nameGurmukhi ) )
  .exhaustive()

type CollectionsTemplateProps = {
  path?: string[],
}

const CollectionsTemplate = ( { path = [] }: CollectionsTemplateProps ) => {
  const { data } = useCollection( path )

  const router = useRouter()

  if ( data?.type !== 'folder' ) return null

  const onItemPress = ( item: CollectionItem ) => () => match( item )
    .with( { type: 'folder' }, ( folder ) => router.push( `/collections/${[ ...path, folder.id ].join( '/' )}` ) )
    .otherwise( () => router.navigate( `/content/${item.type}/${item.id}` ) )

  return (
    <Container safeArea left right>
      <FlashList
        ItemSeparatorComponent={ItemSeparator}
        ListFooterComponent={() => <Container safeArea bottom />}
        keyExtractor={( { id } ) => id}
        estimatedItemSize={66}
        data={data.items}
        renderItem={( { item } ) => (
          <Item
            testID={item.id}
            title={getDisplayName( item )}
            icon={item.type === 'folder' ? 'chevron-right' : undefined}
            onPress={onItemPress( item )}
          />
        )}
      />
    </Container>
  )
}

export default CollectionsTemplate
