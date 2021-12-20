import { Image, StyleSheet, View } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'

import logo from '../../../assets/images/logo.png'
import Navbar from '../../components/Navbar'
import Typography from '../../components/Typography'
import Colors from '../../themes/colors'
import { px, py } from '../../themes/utils'

const styles = StyleSheet.create( {
  headerIcon: {
    fontSize: 28,
    color: Colors.Disabled,
    ...px( 20 ),
    ...py( 10 ),
  },
  logo: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  logoIcon: {
    width: 28,
    height: 28,
    marginRight: 6,
  },
  logoText: {
    fontSize: 20,
    fontWeight: '300',
  },
} )

/**
 * Navbar component for main header.
 */
const GurbaniNavbar = () => (
  <Navbar
    left={<Icon style={styles.headerIcon} name="menu" />}
    right={<Icon style={styles.headerIcon} name="ios-options-outline" />}
    main={(
      <View style={styles.logo}>
        <Image style={styles.logoIcon} source={logo} />
        <Typography style={styles.logoText}>Shabad OS</Typography>
      </View>
    )}
  />
)

export default GurbaniNavbar
