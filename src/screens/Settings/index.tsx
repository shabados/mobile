import { Atom } from 'jotai'
import { invert } from 'lodash'
import { ReactNode, useState } from 'react'
import { StyleSheet, Switch, View } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'

import Button from '../../components/Button'
import Container from '../../components/Container'
import ItemSeparator from '../../components/ItemSeparator'
import ModalSheet from '../../components/ModalSheet'
import RadioGroup from '../../components/RadioGroup'
import Typography from '../../components/Typography'
import { languages, registerTranslations, useTranslation } from '../../services/i18n'
import { settings, useSetting } from '../../services/settings'
import Units from '../../themes/units'
import { px } from '../../themes/utils'

const strings = registerTranslations( {
  reader: {
    en: 'Reader',
    pa: 'ਪਾਠਕ',
    hi: 'पाठक',
    es: 'Modo Lector',
    de: 'Lesemodus',
    fr: 'Mode lecteur',
    fil: 'Mambabasa',
  },
  language: {
    en: 'App Language',
    pa: 'ਐਪ ਦੀ ਭਾਸ਼ਾ',
    hi: 'ऐप की भाषा',
    es: 'Idioma de la aplicación',
    de: 'Sprache der App',
    fr: "Langue de l'application",
    fil: 'Wika ng App',
  },
} )

const styles = StyleSheet.create( {
  option: {
    flexDirection: 'row',
    alignItems: 'center',
    height: Units.MinimumTouchDimension * Units.ThumbFingerRatio,
  },
  optionComponent: {
    marginLeft: 'auto',
  },
  root: {
    ...px( Units.HorizontalLayoutMargin * 2 ),
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

const SettingsScreen = () => {
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
      </ScrollView>
    </Container>

  )
}

export default SettingsScreen
