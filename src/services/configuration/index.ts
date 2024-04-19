import env from './env'
import sentry from './sentry'

const { postHog } = env

const configuration = {
  sentry,
  postHog,
}

export default configuration
