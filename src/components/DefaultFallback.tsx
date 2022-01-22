import { StyleSheet } from 'react-native'
import { Pulse } from 'react-native-animated-spinkit'

import Colors from '../themes/colors'
import Container from './Container'

const styles = StyleSheet.create( {
  root: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
} )

const DefaultFallback = () => (
  <Container style={styles.root}>
    <Pulse color={Colors.PrimaryText as string} />
  </Container>
)

export default DefaultFallback
