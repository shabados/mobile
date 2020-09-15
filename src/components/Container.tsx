import React, { ReactNode } from 'react'
import { Platform, Dimensions, StyleSheet, View, ViewProps } from 'react-native'

const { height: deviceHeight } = Dimensions.get( 'window' )

const styles = StyleSheet.create( {
  main: {
    flex: 1,
    height: Platform.OS === 'ios' ? deviceHeight : deviceHeight - 20,
    backgroundColor: 'white',
  },
} )

type ContainerProps = {
  children: ReactNode,
} & ViewProps

const Container = ( { children, ...props }: ContainerProps ) => (
  <View style={styles.main} {...props}>
    {children}
  </View>
)

export default Container
