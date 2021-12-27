import { stripVishraams } from 'gurmukhi-utils'
import { FlatList, StyleSheet, View } from 'react-native'

import Languages from '../../lib/languages'
import Units from '../../themes/units'
import { LineData } from '../../types/data'
import Line from './Line'

const styles = StyleSheet.create( {
  linesContent: {
    paddingBottom: 63 + ( Units.Base * Units.LineHeightMultiplier ) / 2,
  },
  root: {
    flex: 1,
    marginBottom: -63,
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
