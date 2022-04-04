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
    ms: 'Tetapan',
    de: 'Einstellungen',
    es: 'Configuración',
    el: 'Ρυθμίσεις',
    fr: 'Paramètres',
    it: 'Impostazioni',
    fil: 'Mga Pagsasaayos',
    jp: '設定',
    ko: '설정',
    th: 'การตั้งค่า',
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
