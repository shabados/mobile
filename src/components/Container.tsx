import React, { ReactNode } from 'react'
import {
  StyleSheet,
  View,
  SafeAreaView,
  ViewProps,
  ColorValue,
} from 'react-native'

import Colours from '../themes/colours'

const styles = StyleSheet.create( {
  main: {
    flex: 1,
    backgroundColor: Colours.White,
  },
  safeArea: {
    flex: 0,
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
  statusBarColor = Colours.White,
  style,
  ...props
}: ContainerProps ) => (
  <>
    <SafeAreaView
      style={[ styles.safeArea, { backgroundColor: statusBarColor } ]}
    />
    <View style={[ styles.main, style ]} {...props}>
      {children}
    </View>
  </>
)

export default Container
