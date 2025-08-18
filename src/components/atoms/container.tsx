import { ComponentProps, ReactNode } from 'react'
import { StyleSheet, View, ViewProps } from 'react-native'
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context'

import { Colors } from '~/themes'

const styles = StyleSheet.create( {
  main: {
    flex: 1,
    backgroundColor: Colors.MainView,
  },
} )

type BaseContainerProps = {
  children?: ReactNode,
}

type ViewContainerProps = {
  safeArea?: false,
} & ViewProps

type SafeAreaViewContainerProps = {
  safeArea: true,
  top?: boolean,
  left?: boolean,
  right?: boolean,
  bottom?: boolean,
} & ComponentProps<typeof SafeAreaView>

type ContainerProps = BaseContainerProps & ( ViewContainerProps | SafeAreaViewContainerProps )

const Container = ( props: ContainerProps ) => {
  const {
    children,
    style,
    safeArea,
    top,
    left,
    right,
    bottom,
    ...rest
  } = props as SafeAreaViewContainerProps

  const insets = useSafeAreaInsets()

  const safeAreaStyle = safeArea ? {
    ...( top && { paddingTop: insets.top } ),
    ...( left && { paddingLeft: insets.left } ),
    ...( right && { paddingRight: insets.right } ),
    ...( bottom && { paddingBottom: insets.bottom } ),
  } : {}

  return (
    <View style={[ styles.main, style, safeAreaStyle ]} {...rest}>
      {children}
    </View>
  )
}

export default Container
