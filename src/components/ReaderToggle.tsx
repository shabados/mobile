import React from 'react'
import { Switch } from 'react-native'

import Colors from '../themes/colors'

type ReaderToggleProps = {
  onChange?: () => void,
  isEnabled: boolean,
}

const ReaderToggle = ( { onChange, isEnabled }: ReaderToggleProps ) => (
  <Switch
    ios_backgroundColor={Colors.InputBox}
    onValueChange={onChange}
    value={isEnabled}
  />
)

export default ReaderToggle
