import { StyleSheet } from 'react-native'

import Typography, { TypographyProps } from '~/components/atoms/Typography'
import { Colors } from '~/themes'

const styles = StyleSheet.create( {
  root: {
    color: Colors.SecondaryText,

  },
} )

export type TranslationLineProps = {
  style?: TypographyProps['style'],
  children: string,
}

const TranslationLine = ( { style, children }: TranslationLineProps ) => (
  <Typography style={[ styles.root, style ]}>{children}</Typography>
)

export default TranslationLine
