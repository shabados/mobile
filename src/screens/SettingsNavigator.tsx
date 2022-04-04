import { createNativeStackNavigator } from '@react-navigation/native-stack'

import BackButton from '../components/BackButton'
import { registerTranslations, useTranslation } from '../services/i18n'
import { SettingsStackParams } from '../types/navigation'
import SettingsScreen from './Settings'

const strings = registerTranslations( {
  settingsTitle: {
    en: 'Settings',
    pa: 'ਸੈਟਿੰਗਾਂ',
    hi: 'सेटिंग',
    es: 'Configuración',
    de: 'Einstellungen',
    fr: 'Paramètres',
    fil: 'Mga Pagsasaayos',
  },
} )

const { Navigator, Screen } = createNativeStackNavigator<SettingsStackParams>()

const SettingsNavigator = () => {
  const { t } = useTranslation()

  return (
    <Navigator>
      <Screen
        name="Settings.View"
        component={SettingsScreen}
        options={{
          title: t( strings.settingsTitle ),
          headerLeft: BackButton,
        }}
      />
    </Navigator>
  )
}

export default SettingsNavigator
