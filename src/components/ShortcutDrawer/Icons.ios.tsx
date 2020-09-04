import React from 'react'
import { createIconSetFromFontello } from 'react-native-vector-icons'
import { IconsType } from './Icons.types'
import fontelloConfig from '../../../assets/fonts/fontello-icons.json'

const Icon = createIconSetFromFontello( fontelloConfig )

const ICON_SIZE = 20
const ICON_COLOR = 'rgb(47,124,246)'
const navigationIconSpacing = { paddingRight: '8%', paddingLeft: '8%' }

const icons: IconsType = {
  SearchIcon: ( props: any ) => <Icon name="search" size={ICON_SIZE} color={ICON_COLOR} style={navigationIconSpacing} {...props} />,
  HistoryIcon: ( props: any ) => <Icon name="history" size={ICON_SIZE} color={ICON_COLOR} style={navigationIconSpacing} {...props} />,
  BookmarkIcon: ( props: any ) => <Icon name="bookmark" size={ICON_SIZE} color={ICON_COLOR} style={navigationIconSpacing} {...props} />,
  TabsIcon: ( props: any ) => <Icon name="tabs" size={ICON_SIZE} color={ICON_COLOR} style={navigationIconSpacing} {...props} />,
  DotsIcon: ( props: any ) => <Icon name="ellipsis" size={ICON_SIZE} color={ICON_COLOR} style={navigationIconSpacing} {...props} />,
}

export default icons
