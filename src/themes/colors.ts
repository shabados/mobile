import { Theme as ReactNavigationTheme } from '@react-navigation/native'
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
  | 'Link'

type Theme = { [key in ColorKeys]: ColorValue }

// https://developer.apple.com/design/human-interface-guidelines/color#iOS-iPadOS
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
  Link: PlatformColor( 'link' ),
}

// https://developer.android.com/reference/android/R.attr
// https://developer.android.com/reference/android/R.color.html
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
  Link: PlatformColor( '?android:attr/colorPrimary' ),
}

export const Colors = Platform.select<Theme>( { android, ios } )!

export const reactNavigationTheme = {
  dark: false,
  colors: {
    background: Colors.MainView as string,
    card: Colors.MainView as string,
    text: Colors.PrimaryText as string,
    border: Colors.Separator as string,
    primary: Colors.Link as string,
    notification: Colors.InputBox as string,
  },
} satisfies ReactNavigationTheme
