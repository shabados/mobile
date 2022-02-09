import { createStackNavigator, StackNavigationOptions } from '@react-navigation/stack'
import { toUnicode } from 'gurmukhi-utils'
import { useQuery } from 'react-query'

import { getCollections } from '../../services/data/collections'
import { CollectionData, ContentType } from '../../types/data'
import { CollectionsStackParams } from '../../types/navigation'
import CollectionsScreen from '../Collections'
import { FolderItem } from '../Collections/types'

const { Screen, Navigator } = createStackNavigator<CollectionsStackParams>()

const screenOptions: StackNavigationOptions = { headerShown: false }

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

const CollectionsNavigator = () => {
  const { data: items } = useQuery( 'collections-screen', collectionsQuery )

  return (
    <Navigator>
      <Screen
        name="Collections.List"
        component={CollectionsScreen}
        options={screenOptions}
        initialParams={{ items }}
      />
    </Navigator>
  )
}

export default CollectionsNavigator
