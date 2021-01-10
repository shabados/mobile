import React from 'react'
import { useQuery } from 'react-query'

import Screens from '../../lib/screens'
import Container from '../../components/Container'
import { getShabad } from '../../data/shabads'

import BottomBar from './BottomBar'
import Lines from './Lines'
import { options } from './Navbar'

type ShabadQuery = { queryKey: [string] }
const shabadQuery = ( { queryKey }: ShabadQuery ) => getShabad( ...queryKey )

const GurbaniScreen = () => {
  const { data } = useQuery( 'DMP', shabadQuery )

  return (
    <Container>
      {data && <Lines lines={data} />}

      <BottomBar />
    </Container>
  )
}

export const gurbaniScreen = {
  name: Screens.Gurbani,
  component: GurbaniScreen,
  options,
}

export default GurbaniScreen
