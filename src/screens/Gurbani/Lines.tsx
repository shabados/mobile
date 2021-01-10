import React from 'react'
import { FlatList, StyleSheet, View } from 'react-native'
import { stripVishraams } from 'gurmukhi-utils'

import { LineData } from '../../types/data'
import Languages from '../../lib/languages'

import Line from './Line'

const styles = StyleSheet.create( {
  linesContent: {
    paddingBottom: 50,
  },
  root: {
    flex: 1,
    marginBottom: -50,
  },
} )

type RenderItem = { item: LineData }

const renderLine = ( {
  item: {
    id,
    gurmukhi,
    translations,
  },
}: RenderItem ) => (
  <Line
    key={id}
    gurmukhi={stripVishraams( gurmukhi )}
    translations={translations}
    transliterations={[ Languages.English ]}
  />
)

export type LineProps = {
  /**
   * The lines to render.
   */
  lines: LineData[],
}

/**
 * Renders a full-height list of lines.
 */
const Lines = ( { lines }: LineProps ) => (
  <View style={styles.root}>
    <FlatList contentContainerStyle={styles.linesContent} data={lines} renderItem={renderLine} />
  </View>
)

export default Lines
