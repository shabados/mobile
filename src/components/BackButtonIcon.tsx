import { StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'

import Units from '../themes/units'
import BackButton from './BackButton'

const styles = StyleSheet.create( {
  backIcon: {
    fontSize: Units.Title1,
  },
} )

const BackButtonIcon = () => <BackButton testID="back-button" variant="text" label={<Icon style={styles.backIcon} name="arrow-back" />} />

export default BackButtonIcon
