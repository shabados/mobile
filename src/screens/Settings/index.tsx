import { StyleSheet, View } from 'react-native'

import Button from '../../components/Button'
import Container from '../../components/Container'
import Typography from '../../components/Typography'
import { settings, useSetting } from '../../services/settings'
import { px, py } from '../../themes/utils'

const styles = StyleSheet.create( {
  root: {
    ...px( 20 ),
    ...py( 20 ),
  },
} )

const SettingsScreen = () => {
  const [ localeSetting, setLocale ] = useSetting( settings.locale )

  return (
    <Container style={styles.root}>
      <Typography>{localeSetting}</Typography>

      <View style={{ flex: 1, flexDirection: 'row' }}>
        <Button onPress={() => void setLocale( 'en-US' )}>en-US</Button>
        <Button onPress={() => void setLocale( 'fr' )}>Fr</Button>
      </View>
    </Container>

  )
}

export default SettingsScreen
