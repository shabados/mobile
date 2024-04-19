import env from './env'
import ifEnabled from './if-enabled'
import sentry from './sentry'

const { postHog, logLevel } = env

const configuration = {
  logLevel,
  sentry,
  postHog: ifEnabled( postHog ),
}

export default configuration
