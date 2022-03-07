import { toUnicode } from 'gurmukhi-utils'
import { StyleSheet } from 'react-native'

import Languages from '../helpers/languages'
import transliterators from '../helpers/transliterators'
import Colors from '../themes/colors'
import Units from '../themes/units'
import Typography, { TypographyProps } from './Typography'

const styles = StyleSheet.create( {
  root: {
    color: Colors.SecondaryText,
    paddingBottom: ( Units.Base * Units.LineHeightMultiplier ) / 4,
  },
} )

export type TransliterationLineProps = {
  style?: TypographyProps['style'],
  children: string,
  language: Languages.English | Languages.Hindi | Languages.Urdu,
}

const TransliterationLine = ( { style, children, language }: TransliterationLineProps ) => (
  <Typography style={[ styles.root, style ]}>
    {transliterators[ language ]( toUnicode( children ) )}
  </Typography>
)

export default TransliterationLine
