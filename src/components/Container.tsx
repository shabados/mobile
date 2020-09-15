import React, { FC, ReactNode } from 'react'
import { Platform, Dimensions, StyleSheet, View, ViewProps } from 'react-native'

type ContainerProps = {
  children: ReactNode,
} & ViewProps

const deviceHeight = Dimensions.get( 'window' ).height

const styles = StyleSheet.create( {
  main: {
    flex: 1,
    height: Platform.OS === 'ios' ? deviceHeight : deviceHeight - 20,
    backgroundColor: 'white',
  },
} )

const Container: FC<ContainerProps> = ( { children, ...props }: ContainerProps ) => (
  <View style={styles.main} {...props}>
    {children}
  </View>
)

export default Container
