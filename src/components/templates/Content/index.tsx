import { ComponentType, useEffect } from 'react'

import Empty from '~/components/atoms/Empty'
import { useLastViewed } from '~/services/history/last-viewed'
import { ContentType } from '~/types/data'

import Bani from './Bani'
import Shabad from './Shabad'

// Maybe these should be moved into their own standalone templates entirely
const templates = {
  ang: Empty,
  bani: Bani,
  shabad: Shabad,
} satisfies Record<ContentType, ComponentType<{ id: string }>>

type ContentTemplateProps = {
  id: string,
  type: ContentType,
  lineId?: string,
}

const ContentTemplate = ( { id, type, lineId }: ContentTemplateProps ) => {
  const [ , setLastViewed ] = useLastViewed()
  useEffect( () => { setLastViewed( { type, id, lineId } ) }, [ setLastViewed, id, type, lineId ] )

  const Template = templates[ type ]

  return <Template id={id} />
}

export default ContentTemplate
