import React, { ReactNode } from 'react'
import { StyleSheet, Text, TextProps, TextStyle } from 'react-native'

import { ValueOf } from '../types/utils'
import Colors from '../themes/colors'

// TODO @Harjot1Singh
/*
Refactor out the common styles in fontVariants into styles and merge them with variants funcs below
*/

const styles = StyleSheet.create( {
  base: {
    color: Colors.PrimaryText,
    lineHeight: 24,
  },
  // caption: {
  //   color: Colors.SecondaryText,
  // },
  // title: {
  //   lineHeight: 48,
  // },
} )

type Variants = 'caption' | 'body' | 'header' | 'subtitle' | 'title' | 'button'
enum Font {
  Latin = 'latin',
  Gurmukhi = 'gurmukhi'
}

type FontName = ValueOf<typeof Font>

type VariantStyles = { [key in string]: TextStyle }
type FontVariants = { [key in FontName]: VariantStyles }

const fontVariants: FontVariants = {
  gurmukhi: StyleSheet.create( {
    body: {
      fontSize: 16,
    },
    caption: {
      color: Colors.SecondaryText,
      fontSize: 14,
    },
    header: {
      fontSize: 18,
      lineHeight: 28,
    },
    subtitle: {
      fontSize: 21,
      lineHeight: 36,
    },
    title: {
      fontSize: 24,
      lineHeight: 48,
    },
  } ),
  latin: StyleSheet.create( {
    body: {
      fontSize: 14,
    },
    caption: {
      color: Colors.SecondaryText,
      fontSize: 12,
    },
    header: {
      fontSize: 16,
      lineHeight: 28,
    },
    subtitle: {
      fontSize: 20,
      lineHeight: 36,
    },
    title: {
      fontSize: 22,
      lineHeight: 48,
    },
  } ),
}

// const getVariantsFor = ( font: FontName ) => Object
//   .entries( styles )
//   .reduce( ( mergedStyles, [ name, style ] ) => ( {
//     ...mergedStyles,
//     [ name ]: ( { ...style, ...fontVariants[ font ][ name ] } ),
//   } ), {} as VariantStyles )

// const variants: FontVariants = Object
//   .values( Font )
//   .reduce( ( variants, fontName ) => ( {
//     ...variants,
//     ...getVariantsFor( fontName ),
//   } ), {} as FontVariants )

export type TypographyProps = TextProps & {
  children: ReactNode,
  /**
   * The type of typography to render.
   */
  variant?: Variants,
  font?: FontName,
}

/**
 * Typography component with different variants.
 */
const Typography = ( {
  style,
  font = Font.Latin,
  variant = 'body',
  ...props
}: TypographyProps ) => (
  <Text
    style={[
      styles.base,
      fontVariants[ font ][ variant ],
      style,
    ]}
    {...props}
  />
)

export default Typography
