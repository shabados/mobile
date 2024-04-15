import { ColorValue, DimensionValue } from 'react-native'

/**
 * Set Top and Bottom margin to given value.
 */
export const my = ( value: DimensionValue = 'auto' ) => ( {
  marginTop: value,
  marginBottom: value,
} )

/**
 * Set Left and Right margin to given value.
 */
export const mx = ( value: DimensionValue = 'auto' ) => ( {
  marginLeft: value,
  marginRight: value,
} )

/**
 * Set Left and Right padding to given value.
 */
export const px = ( value: DimensionValue = 'auto' ) => ( {
  paddingLeft: value,
  paddingRight: value,
} )

/**
 * Set Top and Bottom padding to given value.
 */
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
