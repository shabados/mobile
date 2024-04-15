import { useLocalSearchParams } from 'expo-router'
import { Suspense } from 'react'

import ContentTemplate from '~/components/templates/Content'
import DefaultFallback from '~/components/templates/DefaultFallback'
import { ContentType } from '~/types/data'

export default () => {
  const props = useLocalSearchParams<{
    type: ContentType,
    id: string,
  }>()

  return (
    <Suspense fallback={<DefaultFallback />}>
      <ContentTemplate {...props} />
    </Suspense>
  )
}
