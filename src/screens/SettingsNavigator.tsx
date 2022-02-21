import { createNativeStackNavigator } from '@react-navigation/native-stack'

import BackButton from '../components/BackButton'
import { SettingsStackParams } from '../types/navigation'
import SettingsScreen from './Settings'

const { Navigator, Screen } = createNativeStackNavigator<SettingsStackParams>()

const SettingsNavigator = () => (
  <Navigator>
    <Screen
      name="Settings.View"
      component={SettingsScreen}
      options={{
        title: 'Settings',
        headerLeft: BackButton,
      }}
    />
  </Navigator>
)

export default SettingsNavigator
