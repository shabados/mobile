import React from 'react'
import { StyleSheet } from 'react-native'
import { createIconSetFromFontello } from 'react-native-vector-icons'

import fontelloConfig from '../../../assets/fonts/fontello-icons.json'
import Colours from '../../themes/colours'

import { IconProps, IconsType } from './Icons.types'

const Icon = createIconSetFromFontello( fontelloConfig )

const styles = StyleSheet.create( {
  icon: {
    paddingLeft: '8%',
    paddingRight: '8%',
  },
} )

const iconProps = {
  size: 20,
  color: Colours.Blue,
}

type StyledIconProps = IconProps & { name: string }

const StyledIcon = ( props: StyledIconProps ) => (
  <Icon style={styles.icon} {...iconProps} {...props} />
)

const icons: IconsType = {
  SearchIcon: ( props ) => <StyledIcon name="search" {...props} />,
  HistoryIcon: ( props ) => <StyledIcon name="history" {...props} />,
  BookmarkIcon: ( props ) => <StyledIcon name="bookmark" {...props} />,
  TabsIcon: ( props ) => <StyledIcon name="tabs" {...props} />,
  DotsIcon: ( props ) => <StyledIcon name="ellipsis" {...props} />,
}

export default icons
