import { Appearance } from 'react-native'

import Colors from './colors'

/**
 * The gradients are very specific to the consumption of react-native-linear-gradient.
 */
export const gradients = {
  TransparentToBlack: {
    colors: Appearance.getColorScheme() === 'light'
      ? [ 'rgba(255, 255, 255, 0)', Colors.MainView ]
      : [ 'rgba(0, 0, 0, 0)', Colors.MainView ],
    locations: [ 0.0, 0.6 ],
  },
}
