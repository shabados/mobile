import { nativeApplicationVersion, nativeBuildVersion } from 'expo-application'
import { Atom } from 'jotai'
import { invert } from 'lodash'
import { ReactNode, useState } from 'react'
import { ScrollView, StyleSheet, Switch, View } from 'react-native'

import Button from '~/components/atoms/Button'
import Container from '~/components/atoms/Container'
import ItemSeparator from '~/components/atoms/ItemSeparator'
import RadioGroup from '~/components/atoms/RadioGroup'
import Typography from '~/components/atoms/Typography'
import ModalSheet from '~/components/organisms/ModalSheet'
import { languages, registerTranslations, useTranslation } from '~/services/i18n'
import { settings, useSetting } from '~/services/settings'
import { px, py, units } from '~/themes'

const strings = registerTranslations( {
  reader: {
    en: 'Reader',
    pa: 'ਪਾਠਕ',
    hi: 'पाठक',
    ms: 'Membaca',
    de: 'Lesemodus',
    es: 'Modo Lector',
    el: 'Αναγνώστης',
    fr: 'Mode lecteur',
    it: 'Lettura',
    fil: 'Mambabasa',
    jp: '読む',
    ko: '독서',
    th: 'การอ่าน',
  },
  language: {
    en: 'App Language',
    pa: 'ਐਪ ਦੀ ਭਾਸ਼ਾ',
    hi: 'ऐप की भाषा',
    ms: 'Bahasa Apl',
    de: 'Sprache der App',
    es: 'Idioma de la aplicación',
    el: 'Γλώσσα της εφαρμογής',
    fr: "Langue de l'application",
    it: "Lingua dell'app",
    fil: 'Wika ng App',
    jp: 'アプリの言語',
    ko: '앱의 언어',
    th: 'ภาษาของแอป',
  },
} )

const styles = StyleSheet.create( {
  option: {
    flexDirection: 'row',
    alignItems: 'center',
    height: units.minimumTouchDimension * units.thumbFingerRatio,
  },
  optionComponent: {
    marginLeft: 'auto',
  },
  root: {
    ...px( units.horizontalLayoutMargin * 2 ),
  },
  version: {
    textAlign: 'center',
    ...py( 16 ),
  },
} )

type BaseOptionProps<T> = { setting: Atom<T | undefined> }

const ToggleOption = ( { setting }: BaseOptionProps<boolean> ) => {
  const [ value, setValue ] = useSetting( setting )

  return ( <Switch value={value} onValueChange={setValue} /> )
}

type SelectOptionProps<Value> = BaseOptionProps<Value> & {
  options: [string, Value][],
}

const SelectOption = <T extends string | number | boolean,>( {
  setting,
  options,
}: SelectOptionProps<T> ) => {
  // ! Generic setting prop type causes setValue to resolve as never, hence the aggressive cast
  const [ value, setValue ] = useSetting( setting ) as [T, ( value: T ) => void]

  const [ name ] = options.find( ( [ , optionValue ] ) => optionValue === value ) ?? []

  const [ isModalOpen, setModalOpen ] = useState( false )
  const onChange = ( value: T ) => {
    setValue( value )
    setModalOpen( false )
  }

  return (
    <>
      <Button onPress={() => setModalOpen( true )}>{name}</Button>

      <ModalSheet open={isModalOpen} onClose={() => setModalOpen( false )}>
        <RadioGroup initialValue={value} options={options} onChange={onChange} />
      </ModalSheet>
    </>
  )
}

type OptionProps = { title: string, component: ReactNode }

const Option = ( { title, component }: OptionProps ) => (
  <View>
    <View style={styles.option}>
      <Typography>{title}</Typography>

      <View style={styles.optionComponent}>
        {component}
      </View>
    </View>

    <ItemSeparator full />
  </View>
)

const SettingsTemplate = () => {
  const { t } = useTranslation()

  return (
    <Container style={styles.root} safeArea left right>
      <ScrollView>
        <Option
          title={t( strings.reader )}
          component={<ToggleOption setting={settings.readerMode} />}
        />

        <Option
          title={t( strings.language )}
          component={(
            <SelectOption
              setting={settings.locale}
              options={Object.entries( invert( languages ) )}
            />
          )}
        />

        <Button onPress={() => { throw new Error( 'Test!' ) }}>Trigger crash</Button>

        <Typography variant="subtitle" style={styles.version}>
          v
          {nativeApplicationVersion}
          -
          {nativeBuildVersion}
        </Typography>
      </ScrollView>
    </Container>

  )
}

export default SettingsTemplate
