import { StyleSheet } from 'react-native'
import Animated, { FadeInRight } from 'react-native-reanimated'

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
  <Animated.Text style={styles.root} entering={FadeInRight}>
    {lines.map( ( { id, gurmukhi }, index ) => (
      <GurmukhiLine key={id} size={1.25}>
        {[ gurmukhi, index !== lines.length - 1 ? ' ' : '' ].join( '' )}
      </GurmukhiLine>
    ) )}
  </Animated.Text>
)

export default Section
