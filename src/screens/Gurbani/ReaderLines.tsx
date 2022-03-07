import { stripVishraams } from 'gurmukhi-utils'
import { FlatList, StyleSheet, View } from 'react-native'
import { useQuery } from 'react-query'

import Units from '../../themes/units'
import { LineData } from '../../types/data'
import Line from './Line'

const styles = StyleSheet.create( {
  container: {
    overflow: 'visible',
  },
  linesContent: {
    paddingBottom: 63 + ( Units.Base * Units.LineHeightMultiplier ) / 2,
  },
  root: {
    flex: 1,
  },
} )

type RenderItem = { item: LineData }

const renderLine = ( { item: { id, gurmukhi } }: RenderItem ) => (
  <Line
    key={id}
    gurmukhi={stripVishraams( gurmukhi )}
  />
)

export type ReaderLinesProps = {
  id: string,
  lines: LineData[],
}

const ReaderLines = ( { id, lines }: ReaderLinesProps ) => {
  const { data: groupedLines } = useQuery( id, () => lines )

  return (
    <View style={styles.root}>
      <FlatList
        style={styles.container}
        contentContainerStyle={styles.linesContent}
        data={groupedLines}
        renderItem={renderLine}
      />
    </View>
  )
}

export default ReaderLines
