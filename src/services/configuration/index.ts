import env from './env'
import ifEnabled from './if-enabled'
import sentry from './sentry'

const { postHog, logger } = env

const configuration = {
  sentry,
  logger: ifEnabled( logger ),
  postHog: ifEnabled( postHog ),
}

export default configuration
