import { Platform } from 'react-native'

export const os = Platform.OS as 'ios' | 'android'
export type OS = typeof os

declare module 'react-native' {
  // eslint-disable-next-line
  interface PlatformStatic  {
    // Narrow down Platform.select to only include ios and android for a better type DX
    select<T>(
      specifics:
        | ( { [platform in OS]?: T } & { default: T } )
        | { [platform in OS]: T },
    ): T,
    select<T>( specifics: { [platform in OS]?: T } ): T | undefined,
  }
}
