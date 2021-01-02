import React, { ReactNode } from 'react'
import { StyleSheet, Text as NativeText, TextProps as NativeTextProps } from 'react-native'

import Colours from '../../themes/colours'
import Fonts from '../../themes/fonts'

export type TextProps = NativeTextProps & { children: ReactNode }

const styles = StyleSheet.create( {
  text: {
    color: Colours.White,
    fontFamily: Fonts.NotoSansRegular,
  },
} )

/**
 * Themed text component.
 */
export const Text = ( {
  style,
  ...props
}: TextProps ) => <NativeText style={[ styles.text, style ]} {...props} />
