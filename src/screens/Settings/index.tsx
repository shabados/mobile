import { Atom } from 'jotai'
import { ReactNode } from 'react'
import { StyleSheet, Switch, View } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'

import Container from '../../components/Container'
import Typography from '../../components/Typography'
import { settings, useSetting } from '../../services/settings'
import Colors from '../../themes/colors'
import { px } from '../../themes/utils'

const styles = StyleSheet.create( {
  option: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 65,
    borderBottomColor: Colors.Separator,
    borderBottomWidth: 0.5,
  },
  optionComponent: {
    marginLeft: 'auto',
  },
  root: {
    ...px( 35 ),
  },
} )

type BaseOptionProps<T> = { setting: Atom<T | undefined> }

const ToggleOption = ( { setting }: BaseOptionProps<boolean> ) => {
  const [ value, setValue ] = useSetting( setting )

  return ( <Switch value={value} onValueChange={setValue} /> )
}

type OptionProps = { title: string, component: ReactNode }

const Option = ( { title, component }: OptionProps ) => (
  <View style={styles.option}>
    <Typography>{title}</Typography>

    <View style={styles.optionComponent}>
      {component}
    </View>
  </View>
)

const SettingsScreen = () => (
  <Container style={styles.root}>
    <ScrollView>
      <Option title="Reader" component={<ToggleOption setting={settings.readerMode} />} />
    </ScrollView>
  </Container>

)

export default SettingsScreen
