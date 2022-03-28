import {
  init,
  ReactNativeTracing,
  ReactNavigationInstrumentation,
  setContext,
  startTransaction as startSentryTransaction,
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
    integrations: [
      new ReactNativeTracing( {
        tracingOrigins: [ 'api.gurbaninow.com' ],
        routingInstrumentation,
      } ),
    ],
  } )

  const registerNavigation = ( navigationRef: any ) => (
    routingInstrumentation.registerNavigationContainer( navigationRef )
  )

  const transactions = new Map<string, ReturnType<typeof startSentryTransaction>>()
  const startTransaction = ( name: string ) => {
    const transaction = startSentryTransaction( { name } )

    transactions.set( name, transaction )

    return transaction
  }

  const endTransaction = ( name: string ) => {
    if ( !transactions.has( name ) ) return

    transactions.get( name )?.finish()
  }

  return { initialize, wrap, registerNavigation, startTransaction, endTransaction, setContext }
}

export default sentryAdapterFactory()
