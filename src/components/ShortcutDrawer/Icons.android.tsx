import React from 'react'
import { StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

import { IconProps, IconsType } from './Icons.types'
import COLORS from '../../themes/colors'

const styles = StyleSheet.create( {
  icon: {
    paddingLeft: '6%',
    paddingRight: '6%',
  },
} )

const iconProps = {
  size: 30,
  color: COLORS.Blue,
}

type StyledIconProps = IconProps & { name: string }

const StyledIcon = ( props: StyledIconProps ) => (
  <Icon style={styles.icon} {...iconProps} {...props} />
)

const icons: IconsType = {
  SearchIcon: ( props ) => <StyledIcon name="magnify" {...props} />,
  HistoryIcon: ( props ) => <StyledIcon name="history" {...props} />,
  BookmarkIcon: ( props ) => <StyledIcon name="bookmark-outline" {...props} />,
  TabsIcon: ( props ) => <StyledIcon name="layers-outline" {...props} />,
  DotsIcon: ( props ) => <StyledIcon name="dots-vertical" {...props} />,
}

export default icons
