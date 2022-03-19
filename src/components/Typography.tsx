import { ReactNode } from 'react'
import { StyleSheet, Text, TextProps } from 'react-native'

import Colors from '../themes/colors'
import Units from '../themes/units'

const styles = StyleSheet.create( {
  base: {
    color: Colors.PrimaryText,
  },
  body: {
    fontSize: Units.Base,
    lineHeight: Units.Base * Units.LineHeightMultiplier,
    fontWeight: '400',
  },
  button: {
    color: Colors.PrimaryText,
  },
  headline: {
    fontSize: Units.Base,
    fontWeight: '600',
  },
} )

type Variants = 'body' | 'headline' | 'button'

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
