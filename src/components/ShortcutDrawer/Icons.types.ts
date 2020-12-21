import { ReactElement } from 'react'
import { GestureResponderEvent } from 'react-native'

export type IconNamesType =
  | 'SearchIcon'
  | 'HistoryIcon'
  | 'BookmarkIcon'
  | 'TabsIcon'
  | 'DotsIcon'

export type IconProps = {
  onPress: ( event: GestureResponderEvent ) => void,
  testID?: string,
}

export type IconsType = {
  [icon in IconNamesType]: ( props: IconProps ) => ReactElement
}
