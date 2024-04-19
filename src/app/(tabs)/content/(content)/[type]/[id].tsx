import { useLocalSearchParams } from 'expo-router'
import { Suspense } from 'react'

import ContentTemplate from '~/components/templates/Content'
import DefaultFallback from '~/components/templates/DefaultFallback'
import { ContentType } from '~/types/data'

export default () => {
  const {
    id,
    type,
  } = useLocalSearchParams<'/(tabs)/content/(content)/[type]/[id]'>()

  return (
    <Suspense fallback={<DefaultFallback />}>
      <ContentTemplate id={id} type={type as ContentType} />
    </Suspense>
  )
}
