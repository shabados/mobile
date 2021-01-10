import React from 'react'
import { useQuery } from 'react-query'

import Container from '../../components/Container'
import { getShabad } from '../../data/shabads'

import BottomBar from './BottomBar'
import Lines from './Lines'

type ShabadQuery = { queryKey: [string] }

const GurbaniScreen = () => {
  const { data } = useQuery( 'DMP', ( { queryKey }: ShabadQuery ) => getShabad( ...queryKey ) )

  return (
    <Container>
      {data && <Lines lines={data} />}

      <BottomBar />
    </Container>
  )
}

export default GurbaniScreen
