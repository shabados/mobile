import { DeviceType, deviceType } from 'expo-device'

type Specifics<T> = {
  [device in DeviceType]?: T
} & { default: T }

export const selectDeviceType = <T>( specifics: Specifics<T> ) => ( deviceType
  ? specifics[ deviceType ] ?? specifics.default
  : specifics.default )
