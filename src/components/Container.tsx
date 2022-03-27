import { ComponentProps, ReactNode } from 'react'
import { StyleSheet, View, ViewProps } from 'react-native'
import { Edge, SafeAreaView } from 'react-native-safe-area-context'

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

type GetEdgesOptions = Partial<{ top: boolean, left: boolean, right: boolean, bottom: boolean }>

const getEdges = ( { top, left, right, bottom }: GetEdgesOptions ) => Object
  .entries( { top, left, right, bottom } )
  .filter( ( [ , truthy ] ) => truthy )
  .map( ( [ prop ] ) => prop ) as Edge[]

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

  const ViewComponent = safeArea ? SafeAreaView : View
  const edgeProps = safeArea ? { edges: getEdges( { top, left, right, bottom } ) } : {}

  return (
    <ViewComponent style={[ styles.main, style ]} {...edgeProps} {...rest}>
      {children}
    </ViewComponent>
  )
}

export default Container
