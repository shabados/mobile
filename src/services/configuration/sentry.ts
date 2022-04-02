import environment from './environment'
import get from './get'

const sentry = {
  dsn: get( 'SENTRY_DSN' ).required( !environment.isLocal ).asString(),
  releaseName: get( 'SENTRY_RELEASE' ).required( !environment.isLocal ).asString(),
}

export default sentry
