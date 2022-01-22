import { Appearance } from 'react-native'

/**
 * The gradients are very specific to the consumption of react-native-linear-gradient.
 */
export const gradients = {
  TransparentToBackground: {
    colors: Appearance.getColorScheme() === 'light'
      ? [ 'rgba(255, 255, 255, 0)', 'rgba(255, 255, 255, 1)' ]
      : [ 'rgba(0, 0, 0, 0)', 'rgba(0, 0, 0, 1)' ],
    locations: [ 0.0, 0.6 ],
  },
}
