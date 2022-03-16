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
  top?: boolean,
  left?: boolean,
  right?: boolean,
  bottom?: boolean,
} & ComponentProps<typeof SafeAreaView>

type ContainerProps = BaseContainerProps & ( ViewContainerProps | SafeAreaViewContainerProps )

const getEdgeProps = ( { top, left, right, bottom }: SafeAreaViewContainerProps ) => Object
  .entries( { top, left, right, bottom } )
  .filter( ( [ , truthy ] ) => truthy )
  .map( ( [ prop ] ) => prop )

const Container = ( props: ContainerProps ) => {
  const {
    children,
    style,
    safeArea,
    ...rest
  } = props

  const ViewComponent = safeArea ? SafeAreaView : View
  const edgeProps = safeArea ? getEdgeProps( props ) : {}

  return (
    <ViewComponent style={[ styles.main, style ]} {...edgeProps} {...rest}>
      {children}
    </ViewComponent>
  )
}

export default Container
