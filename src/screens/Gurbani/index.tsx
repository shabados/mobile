import { useQuery } from 'react-query'

import Container from '../../components/Container'
import { getBookmark, getShabad } from '../../services/data'
import { settings, useSetting } from '../../services/settings'
import { ContentType, LineData } from '../../types/data'
import { GurbaniStackScreenProps } from '../../types/navigation'
import BottomBar from './BottomBar'
import DefaultLines from './DefaultLines'
import ReaderLines from './ReaderLines'

type Loaders = {
  [screen in ContentType]: ( id: string ) => Promise<{ lines: LineData[] }>
}

// ? Loaders return a common interface. Is there a better way to deal with specifics of each type?
const loaders: Loaders = {
  [ ContentType.Shabad ]: getShabad,
  [ ContentType.Bookmark ]: getBookmark,
  [ ContentType.Ang ]: () => Promise.resolve( { lines: [] } ),
}

type GurbaniScreenProps = GurbaniStackScreenProps<'Gurbani.View'>

const GurbaniScreen = ( {
  route: { params: { id, type } },
}: GurbaniScreenProps ) => {
  const { data } = useQuery( [ type, id ], () => loaders[ type ]( id ) )

  const [ isReaderMode ] = useSetting( settings.readerMode )
  const Lines = isReaderMode ? ReaderLines : DefaultLines

  return (
    <Container>
      <Lines key={id} id={id} lines={data!.lines} />

      <BottomBar />
    </Container>
  )
}

export default GurbaniScreen
