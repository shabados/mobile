import { Platform } from 'react-native'

const OS = {
  ios: Platform.OS === 'ios',
  android: Platform.OS === 'android',
}

export default OS
