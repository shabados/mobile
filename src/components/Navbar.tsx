import { ReactNode } from 'react'
import { ColorValue, SafeAreaView, StatusBar, StyleSheet, View } from 'react-native'

import Colors from '../themes/colors'
import Units from '../themes/units'

const styles = StyleSheet.create( {
  header: {
    backgroundColor: Colors.ModalSheetTitleBar,
    flexDirection: 'row',
    borderTopLeftRadius: Units.HorizontalLayoutMargin,
    borderTopRightRadius: Units.HorizontalLayoutMargin,
    alignItems: 'center',
    justifyContent: 'space-between',
    height: Units.MinimumTouchDimension + Units.HorizontalLayoutMargin / 2,
  },
  // this ensures these buttons are always clickable when they are visible
  liftUp: {
    zIndex: 10,
  },
  main: {
    flexDirection: 'row',
  },
} )

type NavbarProps = {
  /**
   * A valid background colour.
   */
  backgroundColor?: ColorValue,
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
    <StatusBar />
    <SafeAreaView />

    <View style={styles.header}>
      <View style={styles.liftUp}>
        {left}
      </View>

      <View style={styles.main}>
        {main}
      </View>

      <View style={styles.liftUp}>
        {right}
      </View>
    </View>
  </View>
)

export default Navbar
