import React from 'react'
import { StackScreenProps } from '@react-navigation/stack'
import { useQuery } from 'react-query'

import Screens, { AppStackParams } from '../../lib/screens'
import { ContentTypes, LineData } from '../../types/data'
import { getBani, getShabad } from '../../data'
import Container from '../../components/Container'

import BottomBar from './BottomBar'
import Lines from './Lines'
import Navbar from './Navbar'

type Loaders = {
  [screen in ContentTypes]: ( options : { queryKey: [string] } ) => Promise<{ lines: LineData[] }>
}

// Loaders all return a common interface. Is there a better way to deal with specifics of each type?
const loaders: Loaders = {
  [ ContentTypes.Shabad ]: ( { queryKey } ) => getShabad( ...queryKey ),
  [ ContentTypes.Bani ]: ( { queryKey } ) => getBani( ...queryKey ),
  [ ContentTypes.Ang ]: () => Promise.resolve( { lines: [] } ),
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
  initialParams: { id: '1', type: ContentTypes.Bani },
}

export default GurbaniScreen
