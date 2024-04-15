import { useSuspenseQuery } from '@tanstack/react-query'

import Container from '~/components/atoms/Container'
import { getBani, getShabad } from '~/services/data'
import { settings, useSetting } from '~/services/settings'
import { ContentType, LineData } from '~/types/data'

import DefaultLines from './DefaultLines'
import ReaderLines from './ReaderLines'

type Loaders = {
  [screen in ContentType]: ( id: string ) => Promise<{ id: string, lines: LineData[] }>
}

// ? Loaders return a common interface. Is there a better way to deal with specifics of each type?
const loaders: Loaders = {
  [ ContentType.Shabad ]: ( id: string ) => getShabad( id ),
  [ ContentType.Bani ]: ( id: string ) => getBani( id ),
  [ ContentType.Ang ]: () => Promise.resolve( { id: '', lines: [] } ),
}

type ContentTemplateProps = {
  id: string,
  type: ContentType,
}

const ContentTemplate = ( {
  id,
  type,
}: ContentTemplateProps ) => {
  const { data } = useSuspenseQuery( {
    queryKey: [ 'content', type, id ],
    queryFn: () => loaders[ type ]( id ),
  } )

  const [ isReaderMode ] = useSetting( settings.readerMode )
  const Lines = isReaderMode ? ReaderLines : DefaultLines

  return (
    <Container>
      <Lines key={data.id} lines={data.lines} />
    </Container>
  )
}

export default ContentTemplate
