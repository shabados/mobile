import React, { ReactNode } from 'react'
import { StyleSheet, Text, TextProps } from 'react-native'

import Colours from '../themes/colours'
import Fonts from '../themes/fonts'

type Variants = 'body' | 'header' | 'button'

export type TypographyProps = TextProps & {
  children: ReactNode,
  variant?: Variants,
}

const styles = StyleSheet.create( {
  base: {
    color: Colours.White,
    fontFamily: Fonts.NotoSansRegular,
  },
  body: {},
  button: {
    color: Colours.TintedWhite,
  },
  header: {
    fontSize: 18,
    fontFamily: Fonts.NotoSansLight,
  },
} )

/**
 * Typography component with different variants.
 */
const Typography = ( {
  style,
  variant = 'body',
  ...props
}: TypographyProps ) => <Text style={[ styles.base, styles[ variant ], style ]} {...props} />

export default Typography
