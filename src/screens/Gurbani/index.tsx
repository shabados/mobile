import React from 'react'
import { StackScreenProps } from '@react-navigation/stack'
import { useQuery } from 'react-query'

import Screens, { AppStackParams } from '../../lib/screens'
import Container from '../../components/Container'
import { getShabad } from '../../data/shabads'

import BottomBar from './BottomBar'
import Lines from './Lines'
import Navbar from './Navbar'

type ShabadQuery = { queryKey: [string] }
const shabadQuery = ( { queryKey }: ShabadQuery ) => getShabad( ...queryKey )

type GurbaniScreenProps = StackScreenProps<AppStackParams, Screens.Gurbani>

const GurbaniScreen = ( {
  route: { params: { shabadId } },
}: GurbaniScreenProps ) => {
  const { data } = useQuery( shabadId, shabadQuery )

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
  initialParams: { shabadId: 'DMP' },
}

export default GurbaniScreen
