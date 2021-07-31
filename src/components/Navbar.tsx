import React, { ReactNode } from 'react'
import { StatusBar, StyleSheet, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

import Colors from '../themes/colors'

const styles = StyleSheet.create( {
  header: {
    backgroundColor: Colors.ModalSheetTitleBar,
    flexDirection: 'row',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 50,
  },
  main: {
    position: 'absolute',
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%',
  },
} )

type NavbarProps = {
  /**
   * A valid background colour.
   */
  backgroundColor?: string,
  /**
   * The main element, centered.
   */
  main?: ReactNode,
  /**
   * The leftmost element.
   */
  left?: ReactNode,
  /**
   * The rightmost element.
   */
  right?: ReactNode,
}

/**
 * Navbar component for the header bar.
 * Works with react navigation.
 */
const Navbar = ( {
  backgroundColor = Colors.MainView,
  main,
  left,
  right,
}: NavbarProps ) => (
  <View style={[ { backgroundColor } ]}>
    <StatusBar translucent barStyle="light-content" backgroundColor={backgroundColor} />
    <SafeAreaView edges={[ 'left', 'top', 'right' ]} />

    <View style={styles.header}>
      {left}

      <View style={styles.main}>
        {main}
      </View>

      {right}
    </View>
  </View>
)

export default Navbar
