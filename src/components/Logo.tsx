import { Image, StyleSheet, useWindowDimensions, View } from 'react-native'

import logo from '../../assets/images/logo.png'
import Units from '../themes/units'
import Typography from './Typography'

const styles = StyleSheet.create( {
  headerTitle: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logoIcon: {
    width: 28,
    height: 28,
    marginRight: 6.5,
  },
  logoText: {
    fontSize: 20,
    lineHeight: 24,
    fontWeight: '300',
  },
} )

const Logo = () => {
  const { width } = useWindowDimensions()

  return (
    <View style={styles.headerTitle}>
      <Image style={styles.logoIcon} source={logo} />
      {width > Units.ThinSplitViewWidth
      && <Typography style={styles.logoText}>Shabad OS</Typography>}
    </View>
  )
}

export default Logo
