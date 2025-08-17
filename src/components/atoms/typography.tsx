import { ReactNode } from 'react'
import { StyleSheet, Text, TextProps } from 'react-native'

import { Colors, units } from '~/themes'

const styles = StyleSheet.create( {
  base: {
    color: Colors.PrimaryText,
  },
  body: {
    fontSize: units.base,
    lineHeight: units.base * units.lineHeightMultiplier,
    fontWeight: '400',
  },
  button: {
    color: Colors.PrimaryText,
  },
  headline: {
    fontSize: units.base,
    fontWeight: '600',
  },
  subtitle: {
    fontSize: units.footnote,
    color: Colors.SecondaryText,
  },
} )

type Variants = Exclude<keyof typeof styles, 'base'>

export type TypographyProps = TextProps & {
  children: ReactNode,
  variant?: Variants,
}

const Typography = ( {
  style,
  variant = 'body',
  ...props
}: TypographyProps ) => <Text style={[ styles.base, styles[ variant ], style ]} {...props} />

export default Typography
