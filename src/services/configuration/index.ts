import environment from './environment'
import get from './get'
import sentry from './sentry'

const configuration = {
  environment,
  sentry,
  split: {
    apiKey: get( 'SPLIT_API_KEY' ).required().asString(),
  },
}

export default configuration
