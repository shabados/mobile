import React from 'react'
import { StyleSheet } from 'react-native'
import IonIcon from 'react-native-vector-icons/Ionicons'
import AntIcon from 'react-native-vector-icons/AntDesign'

import Navbar from '../../components/Navbar'
import BackButton from '../../components/BackButton'
import Typography from '../../components/Typography'
import { px } from '../../themes/utils'
import Colors from '../../themes/colors'

const styles = StyleSheet.create( {
  backButton: {
    marginLeft: -5,
  },
  headerIcon: {
    ...px( 20 ),
    fontSize: 22,
    color: Colors.PrimaryText,
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
    right={<AntIcon testID="add-button" style={styles.headerIcon} name="plus" />}
    main={<Typography variant="header" style={styles.heading}>Bookmarks Collection</Typography>}
    left={<BackButton testID="back-button" style={styles.backButton} variant="text" label={<IonIcon style={styles.headerIcon} name="arrow-back" />} />}
  />
)

export default BookmarksNavbar
