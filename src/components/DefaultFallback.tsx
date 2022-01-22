import { ActivityIndicator, StyleSheet } from 'react-native'

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
    <ActivityIndicator size="large" color={Colors.PrimaryText} />
  </Container>
)

export default DefaultFallback
