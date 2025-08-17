import { ComponentType } from 'react'

import Empty from '~/components/atoms/empty'
import { ContentType } from '~/types/data'

import Bani from './bani'
import Shabad from './shabad'

// Maybe these should be moved into their own standalone templates entirely
const templates = {
  ang: Empty,
  bani: Bani,
  shabad: Shabad,
} satisfies Record<ContentType, ComponentType<{ id: string }>>

type ContentTemplateProps = {
  id: string,
  type: ContentType,
}

const ContentTemplate = ( { id, type }: ContentTemplateProps ) => {
  const Template = templates[ type ]

  return <Template id={id} />
}

export default ContentTemplate
