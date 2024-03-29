import { FlatList, StyleSheet, View } from 'react-native'

import Languages from '../../../helpers/languages'
import Units from '../../../themes/units'
import { LineData } from '../../../types/data'
import Line from './Line'

const styles = StyleSheet.create( {
  container: {
    paddingBottom: Units.Base * Units.LineHeightMultiplier,
  },
  line: {
    paddingTop: Units.Base * Units.LineHeightMultiplier,
  },
  root: {
    flex: 1,
  },
} )

type RenderItem = { item: LineData }

const renderLine = ( { item: { id, gurmukhi, translations } }: RenderItem ) => (
  <Line
    key={id}
    style={styles.line}
    gurmukhi={gurmukhi}
    translations={translations}
    transliterations={[ Languages.English ]}
  />
)

export type NormalLinesProps = {
  lines: LineData[],
}

const NormalLines = ( { lines }: NormalLinesProps ) => (
  <View style={styles.root}>
    <FlatList
      contentContainerStyle={styles.container}
      data={lines}
      renderItem={renderLine}
    />
  </View>
)

export default NormalLines
