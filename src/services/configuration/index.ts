import { get } from 'env-var'

import environment from './environment'

const configuration = {
  environment,
  split: {
    apiKey: get( 'SPLIT_API_KEY' ).required().asString(),
  },
}

export default configuration
