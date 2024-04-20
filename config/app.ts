import { ExpoConfig } from 'expo/config'
import { readdirSync } from 'fs'
import { join } from 'path'

import { version } from '../package.json'
import getEnvironmentConfig from './environment'

const { runtime, build } = getEnvironmentConfig()

const FONT_DIRECTORY = 'assets/fonts'
const fonts = readdirSync( join( __dirname, '..', FONT_DIRECTORY ) )
  .filter( ( font ) => font.endsWith( '.ttf' ) )
  .map( ( font ) => `${FONT_DIRECTORY}/${font}` )

export default {
  name: 'Shabad OS',
  scheme: 'shabad-os',
  owner: 'shabados',
  slug: 'mobile',
  version,
  orientation: 'portrait',
  icon: './assets/images/logo.png',
  userInterfaceStyle: 'automatic',
  splash: {
    resizeMode: 'contain',
    backgroundColor: '#ffffff',
  },
  assetBundlePatterns: [ '**/*' ],
  ios: {
    supportsTablet: true,
    bundleIdentifier: build.bundleId,
  },
  android: {
    package: build.bundleId,
  },
  plugins: [
    [ 'app-icon-badge', {
      enabled: !!build.banner,
      badges: [ { text: build.banner, type: 'banner' } ],
    } ],
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
  extra: {
    runtime,
    build,
    eas: { projectId: 'e32615f5-b036-499a-87ee-23a3dc8ec8d9' },
  },
} satisfies ExpoConfig
