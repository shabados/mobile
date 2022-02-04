import { StyleSheet } from 'react-native'
import AntIcon from 'react-native-vector-icons/AntDesign'

import BackButtonIcon from '../../components/BackButtonIcon'
import Navbar from '../../components/Navbar'
import Typography from '../../components/Typography'
import Colors from '../../themes/colors'
import Units from '../../themes/units'

const styles = StyleSheet.create( {
  disabled: {
    color: Colors.Disabled,
  },
  headerIcon: {
    fontSize: Units.Title1,
    color: Colors.PrimaryText,
  },
  rightButton: {
    marginRight: Units.HorizontalLayoutMargin,
  },
} )

/**
 * Navbar component for main header.
 */
const CollectionsNavbar = () => (
  <Navbar
    backgroundColor="transparent"
    left={<BackButtonIcon />}
    main={<Typography variant="headline">Collections</Typography>}
    right={(
      <AntIcon
        testID="add-button"
        style={[ styles.headerIcon, styles.disabled, styles.rightButton ]}
        name="plus"
      />
    )}
  />
)

export default CollectionsNavbar
