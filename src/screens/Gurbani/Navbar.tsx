import React, { useState } from 'react'
import { Image, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'

import logo from '../../../assets/images/logo.png'
import Colors from '../../themes/colors'
import { px, py, my } from '../../themes/utils'
import Typography from '../../components/Typography'
import Navbar from '../../components/Navbar'
import ReaderToggle from '../../components/ReaderToggle'

const styles = StyleSheet.create( {
  disabled: {
    color: Colors.Disabled,
  },
  headerIcon: {
    fontSize: 22,
    color: Colors.PrimaryText,
    ...py( 20 ),
  },
  heading: {
    ...px( 6 ),
  },
  logo: {
    width: 24,
    height: 24,
    ...my( 6 ),
  },
} )

/**
 * Navbar component for main header.
 */
const GurbaniNavbar = () => {
  const [ isEnabled, setIsEnabled ] = useState( false )
  const setToggle = () => setIsEnabled( !isEnabled )

  return (
    <Navbar
      left={<Icon style={[ styles.headerIcon, styles.disabled ]} name="menu" />}
      right={<ReaderToggle isEnabled={isEnabled} onChange={setToggle} />}
      main={(
        <>
          <Image style={styles.logo} source={logo} />
          <Typography variant="subtitle" style={styles.heading}>{isEnabled ? 'True' : 'False'}</Typography>
        </>
    )}
    />
  )
}

export default GurbaniNavbar
