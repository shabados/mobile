import { SearchParams, useLocalSearchParams } from 'expo-router'
import { Suspense } from 'react'

import ContentTemplate from '~/components/templates/Content'
import DefaultFallback from '~/components/templates/DefaultFallback'
import { useSaveContentPath } from '~/services/history/last-content-path'
import { ContentType } from '~/types/data'

export default () => {
  const {
    id,
    type,
  } = useLocalSearchParams<
    SearchParams<'/(tabs)/content/(content)/[type]/[id]'>
    & Partial<{ lineId: string }>
  >()

  useSaveContentPath()

  return (
    <Suspense fallback={<DefaultFallback />}>
      <ContentTemplate id={id} type={type as ContentType} />
    </Suspense>
  )
}
