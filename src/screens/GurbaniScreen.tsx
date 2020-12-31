import { stripVishraams } from 'gurmukhi-utils'
import React from 'react'
import { FlatList } from 'react-native'
import useSWR from 'swr'

import Container from '../components/Container'
import Line from '../components/Line'
import { getShabad } from '../data/shabads'
import Languages from '../lib/languages'

type RenderItem = {
  item: {
    id: string,
    gurmukhi: string,
    translations: {
      translationSourceId: number,
      translation: string,
    }[],
  },
}

const renderLine = ( {
  item: {
    id,
    gurmukhi,
    translations,
  },
}: RenderItem ) => (
  <Line
    key={id}
    gurbani={stripVishraams( gurmukhi )}
    translations={translations}
    transliterations={[ Languages.English ]}
  />
)

const GurbaniScreen = () => {
  const { data } = useSWR( 'DMP', getShabad )

  return (
    <Container>
      <FlatList data={data} renderItem={renderLine} />
    </Container>
  )
}

export default GurbaniScreen
