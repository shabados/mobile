/**
 * Set Top and Bottom margin to given value.
 */
export const my = ( value: number|string = 'auto' ) => ( {
  marginTop: value,
  marginBottom: value,
} )

/**
 * Set Left and Right margin to given value.
 */
export const mx = ( value: number|string = 'auto' ) => ( {
  marginLeft: value,
  marginRight: value,
} )

/**
 * Set Left and Right padding to given value.
 */
export const px = ( value: number|string = 'auto' ) => ( {
  paddingLeft: value,
  paddingRight: value,
} )

/**
 * Set Top and Bottom padding to given value.
 */
export const py = ( value: number|string = 'auto' ) => ( {
  paddingTop: value,
  paddingBottom: value,
} )

/**
 * Only for development purposes
 */
export const debugBorder = {
  borderWidth: 2,
  borderColor: 'black',
}
