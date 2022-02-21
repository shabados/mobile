import { StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import { HeaderButton } from 'react-navigation-header-buttons'

import Colors from '../themes/colors'

const styles = StyleSheet.create( {
  native: {
    margin: -16,
  },
} )

export type IconHeaderButtonProps = {
  title: string,
  disabled?: boolean,
  // To fix https://github.com/react-navigation/react-navigation/issues/10058
  // Native Stack Navigators + HeaderBackButton has funky margin otherwise
  native?: boolean,
}

const IconHeaderButton = ( { disabled, native = true, ...props }: IconHeaderButtonProps ) => (
  <HeaderButton
    style={native && styles.native}
    IconComponent={Icon}
    iconSize={28}
    color={( disabled ? Colors.Disabled : Colors.PrimaryText ) as string}
    disabled={disabled}
    {...props}
  />
)

export default IconHeaderButton
