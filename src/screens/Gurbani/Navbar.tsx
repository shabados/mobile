import { Image, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'

import logo from '../../../assets/images/logo.png'
import Navbar from '../../components/Navbar'
import Typography from '../../components/Typography'
import Colors from '../../themes/colors'
import { px, py } from '../../themes/utils'

const styles = StyleSheet.create( {
  headerIcon: {
    fontSize: 22,
    color: Colors.Disabled,
    paddingLeft: 20,
    paddingRight: 20,
  },
  heading: {
    ...px( 6 ),
    ...py( 2 ),
  },
  logo: {
    width: 28,
    height: 28,
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
      <>
        <Image style={styles.logo} source={logo} />
        <Typography variant="logo" style={styles.heading}>Shabad OS</Typography>
      </>
    )}
  />
)

export default GurbaniNavbar
