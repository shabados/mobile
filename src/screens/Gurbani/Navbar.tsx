import React from 'react'
import { Image, StyleSheet, TouchableWithoutFeedback } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'

import logo from '../../../assets/images/logo.png'
import Colours from '../../themes/colours'
import { px } from '../../themes/utils'
import Typography from '../../components/Typography'
import Navbar from '../../components/Navbar'

const styles = StyleSheet.create( {
  headerIcon: {
    fontSize: 22,
    color: Colours.White,
    paddingLeft: 20,
    paddingRight: 20,
  },
  heading: {
    ...px( 10 ),
  },
  logo: {
    width: 25,
    height: 25,
  },
} )

/**
 * Navbar component for main header.
 */
const GurbaniNavbar = () => (
  <Navbar
    left={(
      <TouchableWithoutFeedback onPress={() => {
        // navigation.dispatch(
        //     DrawerActions.toggleDrawer('ghtgh')
        // )
      }}
      >
        <Icon style={styles.headerIcon} name="menu" />
      </TouchableWithoutFeedback>
      )}
    right={(
      <TouchableWithoutFeedback onPress={() => {
        // navigation.openDrawer()
      }}
      >
        <Icon style={styles.headerIcon} name="ios-options-outline" />
      </TouchableWithoutFeedback>
      )}
    main={(
      <>
        <Image style={styles.logo} source={logo} />
        <Typography variant="header" style={styles.heading}>Shabad OS</Typography>
      </>
            )}
  />
)

export default GurbaniNavbar
