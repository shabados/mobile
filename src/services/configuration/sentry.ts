import { Platform } from 'react-native'

import { version } from '../../../package.json'
import get from './get'

const sentry = {
  dsn: get( 'SENTRY_DSN' ).required().asString(),
  releaseName: `${Platform.OS}-app@${version}`,
}

export default sentry
