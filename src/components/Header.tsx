import React from 'react'
import { StyleSheet } from 'react-native'

import Fonts from '../themes/fonts'

import Text, { TextProps } from './Text'

export type HeaderProps = TextProps

const styles = StyleSheet.create( {
  header: {
    fontSize: 18,
    fontFamily: Fonts.NotoSansLight,
  },
} )

const Header = ( {
  style,
  ...props
}: HeaderProps ) => <Text style={[ styles.header, style ]} {...props} />

export default Header
