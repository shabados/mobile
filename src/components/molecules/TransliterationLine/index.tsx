import { toUnicode } from 'gurmukhi-utils'
import { StyleSheet } from 'react-native'

import Typography, { TypographyProps } from '~/components/atoms/Typography'
import transliterators, { TransliterableLanguages } from '~/helpers/transliterators'
import { Colors, units } from '~/themes'

const styles = StyleSheet.create( {
  root: {
    color: Colors.SecondaryText,
    paddingBottom: ( units.base * units.lineHeightMultiplier ) / 4,
  },
} )

export type TransliterationLineProps = {
  style?: TypographyProps['style'],
  children: string,
  language: TransliterableLanguages,
}

const TransliterationLine = ( { style, children, language }: TransliterationLineProps ) => (
  <Typography style={[ styles.root, style ]}>
    {transliterators[ language ]( toUnicode( children ) )}
  </Typography>
)

export default TransliterationLine
