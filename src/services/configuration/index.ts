import environment from './environment'
import get from './get'

const configuration = {
  environment,
  sentry: {
    dsn: get( 'SENTRY_DSN' ).required().asString(),
    releaseName: get( 'SENTRY_RELEASE' ).required().asString(),
  },
  split: {
    apiKey: get( 'SPLIT_API_KEY' ).required().asString(),
  },
}

export default configuration
