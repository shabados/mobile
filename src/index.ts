import 'expo-router/entry'
import 'react-native-gesture-handler'

import { activateKeepAwakeAsync } from 'expo-keep-awake'

import * as i18n from '~/services/i18n'

void i18n.initialize()
void activateKeepAwakeAsync()
