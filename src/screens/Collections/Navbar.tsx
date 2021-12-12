import { StyleSheet } from 'react-native'
import AntIcon from 'react-native-vector-icons/AntDesign'
import IonIcon from 'react-native-vector-icons/Ionicons'

import BackButton from '../../components/BackButton'
import Navbar from '../../components/Navbar'
import Typography from '../../components/Typography'
import Colors from '../../themes/colors'
import { px } from '../../themes/utils'

const styles = StyleSheet.create( {
  disabled: {
    color: Colors.Disabled,
  },
  headerIcon: {
    ...px( 20 ),
    color: Colors.PrimaryText,
  },
} )

/**
 * Navbar component for main header.
 */
const CollectionsNavbar = () => (
  <Navbar
    backgroundColor="transparent"
    left={<BackButton testID="back-button" variant="text" label={<IonIcon style={styles.headerIcon} name="arrow-back" />} />}
    main={<Typography variant="headline">Collections</Typography>}
    right={<AntIcon testID="add-button" style={[ styles.headerIcon, styles.disabled ]} name="plus" />}
  />
)

export default CollectionsNavbar
