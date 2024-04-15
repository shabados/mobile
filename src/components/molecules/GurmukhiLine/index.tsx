import { stripVishraams, toUnicode } from 'gurmukhi-utils'
import { StyleSheet } from 'react-native'

import Typography, { TypographyProps } from '~/components/atoms/Typography'
import { fonts, units } from '~/themes'

const styles = StyleSheet.create( {
  root: {
    fontFamily: fonts.SantLipiRegular,
  },
} )

const getFontSizeStyle = ( size = 1 ) => ( {
  fontSize: units.base * units.gurmukhiLatinRatio * size,
  lineHeight: units.base * units.gurmukhiLineHeightMultiplier * size,
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
