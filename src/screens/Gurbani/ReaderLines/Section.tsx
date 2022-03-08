import { StyleSheet, Text } from 'react-native'

import GurmukhiLine from '../../../components/GurmukhiLine'
import Units from '../../../themes/units'
import { px } from '../../../themes/utils'
import { LineData } from '../../../types/data'

const styles = StyleSheet.create( {
  root: {
    paddingTop: Units.Base * Units.LineHeightMultiplier,
    ...px( 20 ),
  },
} )

type SectionProps = {
  lines: LineData[],
}

const Section = ( { lines }:SectionProps ) => (
  <Text style={styles.root}>
    {lines.map( ( { id, gurmukhi } ) => (
      <GurmukhiLine key={id} size={1.25}>{gurmukhi}</GurmukhiLine>
    ) )}
  </Text>
)

export default Section
