import { ColorValue, DimensionValue } from 'react-native'

export const my = ( value: DimensionValue = 'auto' ) => ( {
  marginTop: value,
  marginBottom: value,
} )

export const mx = ( value: DimensionValue = 'auto' ) => ( {
  marginLeft: value,
  marginRight: value,
} )

export const px = ( value: DimensionValue = 'auto' ) => ( {
  paddingLeft: value,
  paddingRight: value,
} )

export const py = ( value: DimensionValue = 'auto' ) => ( {
  paddingTop: value,
  paddingBottom: value,
} )

/**
 * Only for development purposes
 */
export const debugBorder = ( borderColor: ColorValue = 'red' ) => ( {
  borderWidth: 2,
  borderColor,
} )
