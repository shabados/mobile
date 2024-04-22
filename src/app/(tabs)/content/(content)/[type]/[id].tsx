import { SearchParams, useLocalSearchParams } from 'expo-router'
import { Suspense } from 'react'

import ContentTemplate from '~/components/templates/Content'
import DefaultFallback from '~/components/templates/DefaultFallback'
import { ContentType } from '~/types/data'

export default () => {
  const {
    id,
    type,
    lineId,
  } = useLocalSearchParams<
    SearchParams<'/(tabs)/content/(content)/[type]/[id]'>
    & Partial<{ lineId: string }>
  >()

  return (
    <Suspense fallback={<DefaultFallback />}>
      <ContentTemplate id={id} type={type as ContentType} lineId={lineId} />
    </Suspense>
  )
}
