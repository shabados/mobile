import Constants from 'expo-constants'
import { mapValues } from 'lodash'
import { Platform } from 'react-native'

import type { Selectable } from '~/../config/environment/selectable'
import type { RuntimeConfig } from '~/../config/environment/types'

const mapValuesDeep = (
  obj: unknown,
  fn: ( value: unknown, key: string ) => unknown
): unknown => mapValues(
  obj as object,
  ( val, key ) => ( typeof val === 'object'
    ? fn( mapValuesDeep( val, fn ), key )
    : fn( val, key ) )
)

const isSelectable = <T>( value: object ): value is Selectable<T> => 'type' in value && value.type === 'selectable'

type Unwrapped<T> = T extends object
  ? T extends Selectable<infer U>
    ? U extends T
      ? U
      : Unwrapped<U>
    : { [K in keyof T]: Unwrapped<T[K]> }
  : T

const unwrap = <T extends object>( config: T ) => mapValuesDeep( config, ( value: unknown ) => {
  if ( typeof value !== 'object' || value === null ) return value

  if ( isSelectable( value ) ) return Platform.select( value )

  return value
} ) as Unwrapped<T>

// The config from config/environment/config.*.ts cannot select against the platform
// as it is not aware of the platform at pre-build time.
// Instead, we unwrap any Selectable<T> values in the config to return the platform specific value.
export default unwrap( Constants.expoConfig!.extra!.runtime as RuntimeConfig )
