import { ComponentProps, ReactNode } from 'react'
import { StyleSheet, View, ViewProps } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

import Colors from '../themes/colors'

const styles = StyleSheet.create( {
  main: {
    flex: 1,
    backgroundColor: Colors.MainView,
  },
} )

type BaseContainerProps = {
  children: ReactNode,
}

type ViewContainerProps = {
  safeArea?: false,
} & ViewProps

type SafeAreaViewContainerProps = {
  safeArea: true,
} & ComponentProps<typeof SafeAreaView>

type ContainerProps = BaseContainerProps & ( ViewContainerProps | SafeAreaViewContainerProps )

/**
 * Component to wrap a page in.
 */
const Container = ( {
  children,
  style,
  safeArea,
  ...props
}: ContainerProps ) => {
  const ViewComponent = safeArea ? SafeAreaView : View

  return (
    <ViewComponent style={[ styles.main, style ]} {...props}>
      {children}
    </ViewComponent>
  )
}

export default Container
