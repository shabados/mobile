import { ReactNode } from 'react'
import { StyleSheet, Text, TextProps } from 'react-native'

import Colors from '../themes/colors'
import Fonts from '../themes/fonts'

const styles = StyleSheet.create( {
  base: {
    color: Colors.PrimaryText,
  },
  body: {},
  button: {
    color: Colors.PrimaryText,
  },
  header: {
    fontSize: 18,
    fontFamily: Fonts.NotoSansLight,
  },
  logo: {
    fontSize: 20,
    fontWeight: '300',
  },
} )

type Variants = 'body' | 'header' | 'button' | 'logo'

export type TypographyProps = TextProps & {
  children: ReactNode,
  /**
   * The type of typography to render.
   */
  variant?: Variants,
}

/**
 * Typography component with different variants.
 */
const Typography = ( {
  style,
  variant = 'body',
  ...props
}: TypographyProps ) => <Text style={[ styles.base, styles[ variant ], style ]} {...props} />

export default Typography
