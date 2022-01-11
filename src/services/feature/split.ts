import { SplitFactory } from '@splitsoftware/splitio-react-native'
import { getUniqueId } from 'react-native-device-info'

import configuration from '../configuration'

const client = SplitFactory( {
  core: {
    authorizationKey: configuration.split.apiKey,
    key: getUniqueId(),
  },
} ).client()

