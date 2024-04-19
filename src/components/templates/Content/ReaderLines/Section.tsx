import { StyleSheet } from 'react-native'
import Animated, { FadeInRight } from 'react-native-reanimated'

import GurmukhiLine from '~/components/molecules/GurmukhiLine'
import { px, units } from '~/themes'
import { LineData } from '~/types/data'

const styles = StyleSheet.create( {
  root: {
    paddingTop: units.base * units.lineHeightMultiplier,
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
