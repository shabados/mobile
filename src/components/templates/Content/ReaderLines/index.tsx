import { FlashList } from '@shopify/flash-list'
import { useMemo } from 'react'
import { StyleSheet, View } from 'react-native'

import { getLineSections } from '~/helpers/lines'
import { LineData } from '~/types/data'

import Section from './Section'

const styles = StyleSheet.create( {
  root: {
    flex: 1,
  },
} )

type RenderItem = { item: LineData[] }

const renderLineSection = ( { item }: RenderItem ) => <Section lines={item} />

export type ReaderLinesProps = {
  lines: LineData[],
}

const ReaderLines = ( { lines }: ReaderLinesProps ) => {
  const groupedLines = useMemo( () => getLineSections( lines ), [ lines ] )

  return (
    <View style={styles.root}>
      <FlashList
        data={groupedLines}
        renderItem={renderLineSection}
        estimatedItemSize={200}
      />
    </View>
  )
}

export default ReaderLines
