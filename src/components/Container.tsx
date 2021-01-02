import React, { ReactNode } from 'react'
import {
  StyleSheet,
  View,
  ViewProps,
  StatusBar,
} from 'react-native'

import Colours from '../themes/colours'

const styles = StyleSheet.create( {
  main: {
    flex: 1,
    backgroundColor: Colours.MediumGray,
    paddingTop: 10,
  },
} )

type ContainerProps = {
  children: ReactNode,
} & ViewProps

/**
 * Component to wrap a page in.
 */
const Container = ( {
  children,
  style,
  ...props
}: ContainerProps ) => (
  <>
    <StatusBar translucent barStyle="light-content" />

    <View style={[ styles.main, style ]} {...props}>
      {children}
    </View>
  </>
)

export default Container
