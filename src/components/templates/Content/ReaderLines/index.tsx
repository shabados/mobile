import { FlashList } from '@shopify/flash-list'
import { ComponentType, useMemo } from 'react'
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
  Header?: ComponentType,
  initialLineId?: string,
  onLineChange?: ( line: LineData ) => void,
}

const ReaderLines = ( { lines, Header, initialLineId, onLineChange }: ReaderLinesProps ) => {
  const groupedLines = useMemo( () => getLineSections( lines ), [ lines ] )
  const initialSectionIndex = groupedLines.findIndex(
    ( lines ) => lines.some( ( { id } ) => id === initialLineId )
  )

  return (
    <View style={styles.root}>
      <FlashList
        initialScrollIndex={initialSectionIndex}
        viewabilityConfigCallbackPairs={[ {
          viewabilityConfig: {
            itemVisiblePercentThreshold: 70,
            waitForInteraction: true,
          },
          onViewableItemsChanged: ( {
            viewableItems: [ item ],
          } ) => {
            if ( !item ) return

            const [ line ] = item.item as LineData[]
            onLineChange?.( line )
          },
        } ]}
        ListHeaderComponent={Header}
        data={groupedLines}
        renderItem={renderLineSection}
        estimatedItemSize={250}
      />
    </View>
  )
}

export default ReaderLines
