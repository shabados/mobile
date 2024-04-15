import { ColorValue, Platform, PlatformColor } from 'react-native'

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
  | 'Active'

type Theme = { [key in ColorKeys]: ColorValue }

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
  Active: PlatformColor( 'systemGreen' ),
}

const android: Theme = {
  MainView: PlatformColor( '?android:attr/colorForegroundInverse' ),
  ModalSheet: PlatformColor( '?android:attr/colorPrimary' ),
  ModalSheetTitleBar: PlatformColor( '?android:attr/colorPrimary' ),
  InputBox: PlatformColor( '?android:attr/colorButtonNormal' ),
  Separator: '#808080',
  Disabled: '#808080',
  PrimaryText: PlatformColor( '?android:attr/colorForeground' ),
  SecondaryText: '#808080',
  Dev: PlatformColor( '@android:color/holo_red_dark' ),
  Active: PlatformColor( '@android:color/holo_green_light' ),
}

export const Colors = Platform.select<Theme>( { android, ios } )!
