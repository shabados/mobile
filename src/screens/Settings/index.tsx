import { Atom } from 'jotai'
import { invert } from 'lodash'
import { ReactNode } from 'react'
import { StyleSheet, Switch, View } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'

import Button from '../../components/Button'
import Container from '../../components/Container'
import ItemSeparator from '../../components/ItemSeparator'
import Typography from '../../components/Typography'
import { languages, registerTranslations, useTranslation } from '../../services/i18n'
import { settings, useSetting } from '../../services/settings'
import Units from '../../themes/units'
import { px } from '../../themes/utils'

const strings = registerTranslations( {
  reader: {
    'en-US': 'Reader',
  },
  language: {
    'en-US': 'App Language',
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
  const [ value ] = useSetting( setting )

  const [ name ] = options.find( ( [ , optionValue ] ) => optionValue === value ) ?? []

  return (
    <Button>{name?.toString()}</Button>
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
    <Container style={styles.root}>
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
      </ScrollView>
    </Container>

  )
}

export default SettingsScreen
