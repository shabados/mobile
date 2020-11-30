/**
 * Set Top and Bottom margin to auto
 */
export const mx = {
  marginTop: 'auto',
  marginBottom: 'auto',
}

/**
 * Set Top and Bottom padding to given value.
 * Default: 'auto'
 */
export const px = ( value: number|string = 'auto' ) => ( {
  paddingTop: value,
  paddingBottom: value,
} )

/**
 * Set Left and Right padding to given value.
 * Default: 'auto'
 */
export const py = ( value: number|string = 'auto' ) => ( {
  paddingLeft: value,
  paddingRight: value,
} )

