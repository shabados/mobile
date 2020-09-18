import React, { ReactNode } from 'react'
import {
  StyleSheet,
  View,
  SafeAreaView,
  ViewProps,
  ColorValue,
} from 'react-native'

import COLORS from '../themes/colors'

const styles = StyleSheet.create( {
  main: {
    flex: 1,
    backgroundColor: COLORS.White,
  },
} )

type ContainerProps = {
  children: ReactNode,
  /**
   * Color value for Status Bar
   */
  statusBarColor?: ColorValue,
} & ViewProps

const Container = ( {
  children,
  statusBarColor = COLORS.White,
  style,
  ...props
}: ContainerProps ) => (
  <>
    <SafeAreaView style={{ flex: 0, backgroundColor: statusBarColor }} />
    <View style={[ styles.main, style ]} {...props}>
      {children}
    </View>
  </>
)

export default Container
