import { Platform } from 'react-native'

import { SplitAttributes, SplitFeatures } from './types'

export const getDefaultAttributes = (): SplitAttributes => ( {
  platform: Platform.OS,
} )

const defaultStatuses: { [Key in keyof SplitFeatures]: SplitFeatures[Key] } = {
  gurmukhi_font_size: 'normal',
}

export const getDefaultStatus = ( key: keyof SplitFeatures ) => defaultStatuses[ key ]
