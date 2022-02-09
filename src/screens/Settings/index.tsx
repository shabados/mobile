import { StyleSheet } from 'react-native'

import Container from '../../components/Container'
import Typography from '../../components/Typography'
import { px, py } from '../../themes/utils'
import SettingsNavbar from './Navbar'

const styles = StyleSheet.create( {
  root: {
    ...px( 20 ),
    ...py( 20 ),
  },
} )

const SettingsScreen = () => (
  <Container style={styles.root}>
    <Typography>Settings</Typography>
  </Container>
)

export { SettingsNavbar }
export default SettingsScreen
