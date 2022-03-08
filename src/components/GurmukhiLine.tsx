import { stripVishraams, toUnicode } from 'gurmukhi-utils'
import { StyleSheet } from 'react-native'

import OS from '../helpers/os'
import Fonts from '../themes/fonts'
import Units from '../themes/units'
import Typography, { TypographyProps } from './Typography'

const styles = StyleSheet.create( {
  root: {
    fontSize: Units.Base * Units.GurmukhiLatinRatio,
    ...( OS.android && { fontFamily: Fonts.MuktaMahee } ),
    lineHeight: Units.Base * Units.GurmukhiLineHeightMultiplier,
  },
} )

export type GurmukhiLineProps = {
  style?: TypographyProps['style'],
  children: string,
}

const GurmukhiLine = ( { style, children }: GurmukhiLineProps ) => (
  <Typography style={[ styles.root, style ]}>{stripVishraams( toUnicode( children ) )}</Typography>
)

export default GurmukhiLine
