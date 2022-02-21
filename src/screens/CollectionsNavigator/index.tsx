import { createNativeStackNavigator, NativeStackNavigationOptions } from '@react-navigation/native-stack'
import { toUnicode } from 'gurmukhi-utils'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import { useQuery } from 'react-query'

import { getCollections } from '../../services/data/collections'
import { CollectionData, ContentType } from '../../types/data'
import { CollectionsStackParams, CollectionsStackScreenProps } from '../../types/navigation'
import CollectionsScreen from '../Collections'
import { FolderItem } from '../Collections/types'

const { Screen, Navigator } = createNativeStackNavigator<CollectionsStackParams>()

const collectionsToFolder = ( items: CollectionData[] ): FolderItem[] => items.map( ( {
  nameGurmukhi,
  id,
  items,
} ) => ( {
  id,
  name: toUnicode( nameGurmukhi ),
  ...( items
    ? { items: collectionsToFolder( items ) }
    : { type: ContentType.Bookmark }
  ),
} ) )

const collectionsQuery = () => getCollections().then( collectionsToFolder )

const getOptions = ( {
  navigation,
  route: { params: { name } },
}: CollectionsStackScreenProps<'Collections.List'> ): NativeStackNavigationOptions => ( {
  title: name ?? 'Collections',
  headerRight: () => (
    <HeaderButtons>
      <Item title="Done" onPress={() => navigation.goBack()} />
    </HeaderButtons>
  ),
} )

const CollectionsNavigator = () => {
  const { data: items } = useQuery( 'collections-screen', collectionsQuery )

  return (
    <Navigator>
      <Screen
        name="Collections.List"
        component={CollectionsScreen}
        initialParams={{ items }}
        options={getOptions}
      />
    </Navigator>
  )
}

export default CollectionsNavigator
