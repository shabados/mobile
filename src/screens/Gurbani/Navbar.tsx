import React from 'react'
import { Dimensions, Image, StyleSheet, View } from 'react-native'
import { StackNavigationOptions } from '@react-navigation/stack'
import Icon from 'react-native-vector-icons/Ionicons'

import logo from '../../../assets/images/logo.png'
import Colours from '../../themes/colours'
import { px } from '../../themes/utils'
import Typography from '../../components/Typography'

const styles = StyleSheet.create( {
  header: {
    ...px( 10 ),
  },
  headerIcon: {
    fontSize: 22,
    color: Colours.White,
    paddingLeft: 20,
    paddingRight: 20,
  },
  headerRoot: {
    position: 'absolute',
    zIndex: -1,
    width: Dimensions.get( 'screen' ).width,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 25,
    height: 25,
  },
  root: {
    backgroundColor: Colours.DarkGray,
    flexDirection: 'row',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    width: Dimensions.get( 'window' ).width,
    height: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  rootContainer: {
    backgroundColor: Colours.DarkestGray,
    shadowColor: 'transparent',
  },
  statusBar: {
    borderColor: 'red',
    borderWidth: 2,
    position: 'relative',
    top: -20,
  },
} )

/**
 * Navbar component for main header.
 */
const Navbar = () => (
  <View style={styles.root}>
    <Icon style={styles.headerIcon} name="menu" />

    <View style={styles.headerRoot}>
      <Image style={styles.logo} source={logo} />

      <Typography variant="header" style={styles.header}>Shabad OS</Typography>
    </View>

    <Icon style={styles.headerIcon} name="ios-options-outline" />
  </View>
)

export const headerOptions: StackNavigationOptions = {
  headerTitle: Navbar,
  headerStyle: styles.rootContainer,
}

export default Navbar
