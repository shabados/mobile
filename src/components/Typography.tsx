import { ReactNode } from 'react'
import { StyleSheet, Text, TextProps } from 'react-native'

import Colors from '../themes/colors'

const styles = StyleSheet.create( {
  base: {
    color: Colors.PrimaryText,
  },
  body: {
    fontSize: 17,
    lineHeight: 29.75,
    fontWeight: '400',
  },
  button: {
    color: Colors.PrimaryText,
  },
  headline: {
    fontSize: 17,
    fontWeight: '600',
  },
  logo: {
    fontSize: 20,
    fontWeight: '300',
  },
} )

type Variants = 'body' | 'headline' | 'button' | 'logo'

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
