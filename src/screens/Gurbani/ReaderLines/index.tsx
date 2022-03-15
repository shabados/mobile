import { FlatList, StyleSheet, View } from 'react-native'
import { useQuery } from 'react-query'

import { getLineSections } from '../../../helpers/lines'
import { LineData } from '../../../types/data'
import Section from './Section'

const styles = StyleSheet.create( {
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
      <FlatList data={groupedLines} renderItem={renderLineSection} />
    </View>
  )
}

export default ReaderLines
