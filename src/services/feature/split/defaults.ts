import { SplitAttributes, SplitFeatures } from './types'

export const getDefaultAttributes = (): SplitAttributes => ( {

} )

const defaultStatuses: { [Key in keyof SplitFeatures]: SplitFeatures[Key] } = {

}

export const getDefaultStatus = ( key: keyof SplitFeatures ) => defaultStatuses[ key ]
