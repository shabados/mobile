import React from 'react'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { IconsType } from './Icons.types'

const ICON_SIZE = 30
const ICON_COLOR = 'rgb(47,124,246)'
const navigationIconSpacing = { paddingRight: '6%', paddingLeft: '6%' }

const icons: IconsType = {
  SearchIcon: ( props: any ) => (
    <Icon
      name="magnify"
      size={ICON_SIZE}
      color={ICON_COLOR}
      style={navigationIconSpacing}
      {...props}
    />
  ),
  HistoryIcon: ( props: any ) => (
    <Icon
      name="history"
      size={ICON_SIZE}
      color={ICON_COLOR}
      style={navigationIconSpacing}
      {...props}
    />
  ),
  BookmarkIcon: ( props: any ) => (
    <Icon
      name="bookmark-outline"
      size={ICON_SIZE}
      color={ICON_COLOR}
      style={navigationIconSpacing}
      {...props}
    />
  ),
  TabsIcon: ( props: any ) => (
    <Icon
      name="layers-outline"
      size={ICON_SIZE}
      color={ICON_COLOR}
      style={navigationIconSpacing}
      {...props}
    />
  ),
  DotsIcon: ( props: any ) => (
    <Icon
      name="dots-vertical"
      size={ICON_SIZE}
      color={ICON_COLOR}
      style={navigationIconSpacing}
      {...props}
    />
  ),
}

export default icons
