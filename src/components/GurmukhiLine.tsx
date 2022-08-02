import { stripVishraams, toUnicode } from 'gurmukhi-utils'
import { StyleSheet } from 'react-native'

import Fonts from '../themes/fonts'
import Units from '../themes/units'
import Typography, { TypographyProps } from './Typography'

const styles = StyleSheet.create( {
  root: {
    fontFamily: Fonts.SantLipiRegular,
  },
} )

const getFontSizeStyle = ( size = 1 ) => ( {
  fontSize: Units.Base * Units.GurmukhiLatinRatio * size,
  lineHeight: Units.Base * Units.GurmukhiLineHeightMultiplier * size,
} )

export type GurmukhiLineProps = {
  style?: TypographyProps['style'],
  children: string,
  size?: number,
}

const GurmukhiLine = ( { style, children, size }: GurmukhiLineProps ) => (
  <Typography style={[ styles.root, getFontSizeStyle( size ), style ]}>
    {stripVishraams( toUnicode( children ) ) }
  </Typography>
)

export default GurmukhiLine
