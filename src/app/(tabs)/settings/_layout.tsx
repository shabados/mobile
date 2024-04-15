import { Stack } from 'expo-router'

import BackButton from '~/components/atoms/BackButton'
import { registerTranslations, useTranslation } from '~/services/i18n'

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

const SettingsLayout = () => {
  const { t } = useTranslation()

  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          title: t( strings.settingsTitle ),
          headerLeft: BackButton,
        }}
      />
    </Stack>
  )
}

export default SettingsLayout
