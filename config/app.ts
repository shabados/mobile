import { ExpoConfig } from 'expo/config'
import { readdirSync } from 'fs'
import { join } from 'path'

import { version } from '../package.json'
import getEnvironmentConfig from './environment'

const { runtime } = getEnvironmentConfig()

const FONT_DIRECTORY = 'assets/fonts'
const fonts = readdirSync( join( __dirname, '..', FONT_DIRECTORY ) )
  .filter( ( font ) => font.endsWith( '.ttf' ) )
  .map( ( font ) => `${FONT_DIRECTORY}/${font}` )

export default {
  name: 'Shabad OS',
  slug: 'shabados',
  scheme: 'shabados',
  version,
  orientation: 'portrait',
  icon: './assets/images/logo.png',
  userInterfaceStyle: 'automatic',
  splash: {
    // image: './assets/splash.png',
    resizeMode: 'contain',
    backgroundColor: '#ffffff',
  },
  assetBundlePatterns: [ '**/*' ],
  ios: {
    supportsTablet: true,
    bundleIdentifier: 'com.shabados.app',
  },
  android: {
    package: 'com.shabados.app',
    adaptiveIcon: {
      backgroundColor: '#ffffff',
    },
  },
  plugins: [
    'expo-router',
    'expo-localization',
    [ 'expo-screen-orientation', { initialOrientation: 'DEFAULT' } ],
    [ 'expo-dev-launcher' ],
    [ 'expo-font', { fonts } ],
  ],
  experiments: {
    typedRoutes: true,
    tsconfigPaths: true,
  },
  extra: runtime,
} satisfies ExpoConfig
