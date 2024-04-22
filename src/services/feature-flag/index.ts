import * as postHog from 'posthog-react-native'

import { createLogger } from '~/services/logger'

import flags from './flags'

const log = createLogger( 'feature-flag' )

export type FlagName = keyof typeof flags
export type FlagValue<Name extends FlagName> = typeof flags[Name]

const withFallback = <
  F extends FlagName
>( name: F, value: FlagValue<F> ) => {
  const defaultValue = flags[ name ]
  // Flag is initially undefined, so we need to return the default value
  if ( value === undefined ) return defaultValue

  if ( typeof value !== typeof defaultValue ) {
    log.error( `Flag is not set up correctly: ${name} should be ${typeof defaultValue} but got ${typeof value}` )
    return defaultValue
  }

  return value
}

export const useFeatureFlag = <
  F extends FlagName
>( name: F ) => withFallback( name, postHog.useFeatureFlag( name ) as FlagValue<F> )
