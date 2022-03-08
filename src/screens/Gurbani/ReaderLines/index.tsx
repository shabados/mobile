import { FlatList, StyleSheet, View } from 'react-native'
import { useQuery } from 'react-query'

import { getLineSections } from '../../../helpers/lines'
import Units from '../../../themes/units'
import { LineData } from '../../../types/data'
import Section from './Section'

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

type RenderItem = { item: LineData[] }

const renderLineSection = ( { item }: RenderItem ) => <Section lines={item} />

export type ReaderLinesProps = {
  id: string,
  lines: LineData[],
}

const ReaderLines = ( { id, lines }: ReaderLinesProps ) => {
  const { data: groupedLines } = useQuery( [ 'reader', id ], () => getLineSections( lines ), { suspense: false } )

  return (
    <View style={styles.root}>
      <FlatList
        style={styles.container}
        contentContainerStyle={styles.linesContent}
        data={groupedLines}
        renderItem={renderLineSection}
      />
    </View>
  )
}

export default ReaderLines
