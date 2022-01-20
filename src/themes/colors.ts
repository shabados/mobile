import { Appearance, OpaqueColorValue, Platform, PlatformColor } from 'react-native'

type ColorKeys =
  | 'MainView'
  | 'ModalSheet'
  | 'ModalSheetTitleBar'
  | 'InputBox'
  | 'Separator'
  | 'Disabled'
  | 'PrimaryText'
  | 'SecondaryText'
  | 'Dev'

type Theme = { [key in ColorKeys]: OpaqueColorValue | string }

const ios: Theme = {
  MainView: PlatformColor( 'systemBackground' ),
  ModalSheet: PlatformColor( 'secondarySystemBackground' ),
  ModalSheetTitleBar: PlatformColor( 'tertiarySystemBackground' ),
  InputBox: PlatformColor( 'secondarySystemBackground' ),
  Separator: PlatformColor( 'separator' ),
  Disabled: PlatformColor( 'systemFill' ),
  PrimaryText: PlatformColor( 'label' ),
  SecondaryText: PlatformColor( 'secondaryLabel' ),
  Dev: PlatformColor( 'systemRed' ),
}

const androidPalette = {
  p0: '#ffffff',
  p50: '#f5f5f5',
  p100: '#e9e9e9',
  p200: '#d9d9d9',
  p300: '#c4c4c4',
  p400: '#9d9d9d',
  p500: '#7b7b7b',
  p600: '#555555',
  p700: '#434343',
  p800: '#262626',
  p900: '#000000',
}

const androidLight: Theme = {
  MainView: androidPalette.p0,
  ModalSheet: androidPalette.p50,
  ModalSheetTitleBar: androidPalette.p50,
  InputBox: androidPalette.p100,
  Separator: androidPalette.p200,
  Disabled: androidPalette.p300,
  PrimaryText: androidPalette.p900,
  SecondaryText: androidPalette.p500,
  Dev: PlatformColor( '@android:color/holo_red_light' ),
}

const androidDark: Theme = {
  MainView: androidPalette.p900,
  ModalSheet: androidPalette.p800,
  ModalSheetTitleBar: androidPalette.p800,
  InputBox: androidPalette.p700,
  Separator: androidPalette.p700,
  Disabled: androidPalette.p700,
  PrimaryText: androidPalette.p100,
  SecondaryText: androidPalette.p400,
  Dev: PlatformColor( '@android:color/holo_red_dark' ),
}

const android = Appearance.getColorScheme() === 'light' ? androidLight : androidDark

const Colors = Platform.select<Theme>( { android, ios } )

export default Colors
