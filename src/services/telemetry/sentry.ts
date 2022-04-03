import {
  init,
  ReactNativeTracing,
  ReactNavigationInstrumentation,
  setContext,
  startTransaction,
  wrap,
} from '@sentry/react-native'

import configuration from '../configuration'

const sentryAdapterFactory = () => {
  const routingInstrumentation = new ReactNavigationInstrumentation()

  const initialize = () => init( {
    enabled: !configuration.environment.isLocal,
    dsn: configuration.sentry.dsn,
    release: configuration.sentry.releaseName,
    environment: configuration.environment.name,
    enableAutoSessionTracking: true,
    tracesSampleRate: 1,
    integrations: [
      new ReactNativeTracing( {
        tracingOrigins: [ 'api.gurbaninow.com' ],
        routingInstrumentation,
      } ),
    ],
  } )

  const registerNavigation = ( navigationRef: any ) => {
    routingInstrumentation.registerNavigationContainer( navigationRef )
  }

  return { initialize, wrap, registerNavigation, startTransaction, setContext }
}

export default sentryAdapterFactory()
