import { stripVishraams } from 'gurmukhi-utils'
import React from 'react'
import { FlatList } from 'react-native'
import useSWR from 'swr'

import Container from '../components/Container'
import Lines from '../components/Lines'
import Text from '../components/Text'
import { getShabad } from '../data/shabads'
import Colours from '../themes/colours'

const GurbaniScreen = () => {
  const { data } = useSWR( 'DMP', getShabad )

  return (
    <Container>
      {data && <Lines lines={data} />}

    </Container>
  )
}

export default GurbaniScreen
