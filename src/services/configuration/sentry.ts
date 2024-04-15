import { Platform } from 'react-native'

import { version } from '~/../package.json'

import env from './env'
import ifEnabled from './if-enabled'

const sentry = ifEnabled( {
  ...env.sentry,
  releaseName: `${Platform.OS}-app@${version}`,
} )

export default sentry
