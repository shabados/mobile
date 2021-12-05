import { StackScreenProps } from '@react-navigation/stack'
import { useQuery } from 'react-query'

import Container from '../../components/Container'
import { getBookmark, getShabad } from '../../data'
import { ContentType, LineData } from '../../types/data'
import Screens, { AppStackParams } from '../screens'
import BottomBar from './BottomBar'
import Lines from './Lines'
import Navbar from './Navbar'

type Loaders = {
  [screen in ContentType]: ( options : { queryKey: [string] } ) => Promise<{ lines: LineData[] }>
}

// Loaders all return a common interface. Is there a better way to deal with specifics of each type?
const loaders: Loaders = {
  [ ContentType.Shabad ]: ( { queryKey } ) => getShabad( ...queryKey ),
  [ ContentType.Bookmark ]: ( { queryKey } ) => getBookmark( ...queryKey ),
  [ ContentType.Ang ]: () => Promise.resolve( { lines: [] } ),
}

type GurbaniScreenProps = StackScreenProps<AppStackParams, Screens.Gurbani>

const GurbaniScreen = ( {
  route: { params: { id, type } },
}: GurbaniScreenProps ) => {
  const { data } = useQuery( id, loaders[ type ] )

  console.log( `Gurbani Screen: ${type} ${id} ` )

  return (
    <Container>
      {data && <Lines lines={data.lines} />}

      <BottomBar />
    </Container>
  )
}

export const gurbaniScreen = {
  name: Screens.Gurbani,
  component: GurbaniScreen,
  options: { header: Navbar },
  initialParams: { id: '1YU', type: ContentType.Shabad },
}

export default GurbaniScreen
