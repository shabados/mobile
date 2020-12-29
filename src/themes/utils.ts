/**
 * Set Top and Bottom margin to auto
 */
export const my = {
  marginTop: 'auto',
  marginBottom: 'auto',
}

/**
 * Set Left and Right padding to given value.
 * Default: 'auto'
 */
export const px = ( value: number|string = 'auto' ) => ( {
  paddingLeft: value,
  paddingRight: value,
} )

/**
 * Set Top and Bottom padding to given value.
 * Default: 'auto'
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
