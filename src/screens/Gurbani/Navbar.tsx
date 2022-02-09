import { Image, StyleSheet, View } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'

import logo from '../../../assets/images/logo.png'
import Navbar from '../../components/Navbar'
import Typography from '../../components/Typography'
import Colors from '../../themes/colors'
import { px, py } from '../../themes/utils'
import { HomeTabScreenProps } from '../../types/navigation'

const styles = StyleSheet.create( {
  disabledIcon: {
    color: Colors.Disabled,
  },
  headerIcon: {
    color: Colors.PrimaryText,
    fontSize: 28,
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

type GurbaniNavbarProps = HomeTabScreenProps<'Home.Gurbani'>

const GurbaniNavbar = ( { navigation }: GurbaniNavbarProps ) => {
  const onSettingsPress = () => navigation.navigate( 'Home.Settings' )

  return (
    <Navbar
      left={<Icon style={[ styles.headerIcon, styles.disabledIcon ]} name="menu" testID="navbar-menu" />}
      right={<Icon style={styles.headerIcon} name="ios-options-outline" testID="navbar-settings" onPress={onSettingsPress} />}
      main={(
        <View style={styles.logo}>
          <Image style={styles.logoIcon} source={logo} />
          <Typography style={styles.logoText}>Shabad OS</Typography>
        </View>
    )}
    />
  )
}

export default GurbaniNavbar
