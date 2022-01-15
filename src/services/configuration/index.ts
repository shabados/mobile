import environment from './environment'
import get from './get'

const configuration = {
  environment,
  split: {
    apiKey: get( 'SPLIT_API_KEY' ).required().asString(),
  },
}

export default configuration
