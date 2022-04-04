import { createNativeStackNavigator, NativeStackNavigationOptions } from '@react-navigation/native-stack'
import { toUnicode } from 'gurmukhi-utils'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import { useQuery } from 'react-query'

import { getCollections } from '../../services/data/collections'
import { commonStrings, registerTranslations, TFunction, useTranslation } from '../../services/i18n'
import { CollectionData, ContentType } from '../../types/data'
import { CollectionsStackParams, CollectionsStackScreenProps } from '../../types/navigation'
import CollectionsScreen from '../Collections'
import { FolderItem } from '../Collections/types'

const strings = registerTranslations( {
  title: {
    en: 'Collections',
    pa: 'ਸੰਕਲਨ',
    hi: 'संग्रहण',
    ms: 'Koleksi',
    de: 'Sammlungen',
    es: 'Colecciones',
    el: 'Συλλογές',
    fr: 'Collections',
    it: 'Raccolte',
    fil: 'Mga Koleksyon',
    jp: 'コレクション',
    ko: '컬렉션',
  },
} )

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

const getOptions = ( t: TFunction ) => ( {
  navigation,
  route: { params: { name } },
}: CollectionsStackScreenProps<'Collections.List'> ): NativeStackNavigationOptions => ( {
  title: name ?? t( strings.title ),
  headerRight: () => (
    <HeaderButtons>
      <Item title={t( commonStrings.done )} onPress={() => navigation.getParent()?.goBack()} />
    </HeaderButtons>
  ),
} )

const CollectionsNavigator = () => {
  const { data: items } = useQuery( 'collections-screen', collectionsQuery )
  const { t } = useTranslation()

  return (
    <Navigator>
      <Screen
        name="Collections.List"
        component={CollectionsScreen}
        initialParams={{ items }}
        options={getOptions( t )}
      />
    </Navigator>
  )
}

export default CollectionsNavigator
