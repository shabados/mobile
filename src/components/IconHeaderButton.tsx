import Icon from 'react-native-vector-icons/Ionicons'
import { HeaderButton } from 'react-navigation-header-buttons'

import Colors from '../themes/colors'

export type IconHeaderButtonProps = {
  title: string,
  disabled?: boolean,
}

const IconHeaderButton = ( { disabled, ...props }: IconHeaderButtonProps ) => (
  <HeaderButton
    IconComponent={Icon}
    iconSize={28}
    color={( disabled ? Colors.Disabled : Colors.PrimaryText ) as string}
    disabled={disabled}
    {...props}
  />
)

export default IconHeaderButton
