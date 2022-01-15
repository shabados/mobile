import { PlatformOSType } from 'react-native'

export type OffTreatment = 'off'
export type ControlTreatment = 'control'
export type DefaultTreatment = 'on' | OffTreatment

export type SplitAttributes = {
  platform: PlatformOSType,
}

export type SplitFeatures = {

}
