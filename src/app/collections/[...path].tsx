import { Stack, useLocalSearchParams } from 'expo-router'
import { toUnicode } from 'gurmukhi-utils'
import { t } from 'i18next'
import { match } from 'ts-pattern'

import CollectionsTemplate from '~/components/templates/Collections'
import { useCollection } from '~/services/data/collections'
import { registerTranslations } from '~/services/i18n'
import { CollectionFolder } from '~/types/data'

const strings = registerTranslations( {
  title: {
    en: 'Collections',
    pa: 'ਸੰਗ੍ਰਹਿ',
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
    th: 'ที่คั่นหนังสือ',
  },
} )

export default () => {
  const { path } = useLocalSearchParams<'/collections/[...path]'>()
  const { data } = useCollection( path )

  const title = path
    ? match( data as CollectionFolder )
      .with( { origin: 'preset' }, ( folder ) => toUnicode( folder.nameGurmukhi ) )
      .with( { origin: 'user' }, ( folder ) => folder.name )
      .exhaustive()
    : t( strings.title )

  return (
    <>
      <Stack.Screen options={{ title }} />
      <CollectionsTemplate path={path} />
    </>
  )
}
