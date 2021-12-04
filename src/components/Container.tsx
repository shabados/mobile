import { ReactNode } from 'react'
import {
  StyleSheet,
  View,
  ViewProps,
} from 'react-native'

import Colors from '../themes/colors'

const styles = StyleSheet.create( {
  main: {
    flex: 1,
    backgroundColor: Colors.ModalSheet,
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
  <View style={[ styles.main, style ]} {...props}>
    {children}
  </View>
)

export default Container
