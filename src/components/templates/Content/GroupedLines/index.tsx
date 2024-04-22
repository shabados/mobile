import { FlashList } from '@shopify/flash-list'
import { ComponentType } from 'react'
import { StyleSheet, View } from 'react-native'

import { units } from '~/themes'
import { LineData } from '~/types/data'

import Line from './Line'

const styles = StyleSheet.create( {
  container: {
    paddingBottom: units.base * units.lineHeightMultiplier,
  },
  line: {
    paddingTop: units.base * units.lineHeightMultiplier,
  },
  root: {
    flex: 1,
  },
} )

type RenderItem = { item: LineData }

const renderLine = ( { item: { gurmukhi, translations } }: RenderItem ) => (
  <Line
    style={styles.line}
    gurmukhi={gurmukhi}
    translations={translations}
    transliterations={[ 'english' ]}
  />
)

export type NormalLinesProps = {
  Header?: ComponentType,
  lines: LineData[],
  initialLineId?: string,
}

const NormalLines = ( { lines, initialLineId, Header }: NormalLinesProps ) => (
  <View style={styles.root}>
    <FlashList
      initialScrollIndex={lines.findIndex( ( { id } ) => id === initialLineId )}
      contentContainerStyle={styles.container}
      keyExtractor={( { id } ) => id}
      ListHeaderComponent={Header}
      data={lines}
      renderItem={renderLine}
      estimatedItemSize={120}
    />
  </View>
)

export default NormalLines
