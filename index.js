import 'react-native-gesture-handler'

import { AppRegistry } from 'react-native'
import { enableScreens } from 'react-native-screens'

import App from './src/App'
import * as devtools from './src/services/devtools'
import * as i18n from './src/services/i18n'

devtools.initialize()
void i18n.initialize()
enableScreens()

AppRegistry.registerComponent( 'App', () => App )
