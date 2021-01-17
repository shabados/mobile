import React from 'react'
import { StyleSheet } from 'react-native'
import IonIcon from 'react-native-vector-icons/Ionicons'
import AntIcon from 'react-native-vector-icons/AntDesign'

import Navbar from '../../components/Navbar'
import BackButton from '../../components/BackButton'
import Typography from '../../components/Typography'
import { px } from '../../themes/utils'
import Colours from '../../themes/colours'

const styles = StyleSheet.create( {
  backButton: {
    marginRight: -5,
  },
  headerIcon: {
    ...px( 20 ),
    fontSize: 22,
    color: Colours.White,
  },
  heading: {
    fontSize: 16,
  },
} )

/**
 * Navbar component for main header.
 */
const BookmarksNavbar = () => (
  <Navbar
    backgroundColor="transparent"
    // FIXME: swapped the button order because `left` will not fire the `onPress` event
    right={<BackButton testID="back-button" style={styles.backButton} variant="text" label={<IonIcon style={styles.headerIcon} name="arrow-back" />} />}
    main={<Typography variant="header" style={styles.heading}>Bookmarks Collection</Typography>}
    left={<AntIcon testID="add-button" style={styles.headerIcon} name="plus" />}
  />
)

export default BookmarksNavbar
