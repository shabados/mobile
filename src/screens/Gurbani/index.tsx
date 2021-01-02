import React from 'react'
import useSWR from 'swr'

import Container from '../../components/Container'
import { getShabad } from '../../data/shabads'

import BottomBar from './BottomBar'
import Lines from './Lines'

const GurbaniScreen = () => {
  const { data } = useSWR( 'DMP', getShabad )

  return (
    <Container>
      {data && <Lines lines={data} />}

      <BottomBar />
    </Container>
  )
}

export default GurbaniScreen
