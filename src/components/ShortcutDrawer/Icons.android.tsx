import React from 'react'
import { StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

import { IconsType } from './Icons.types'

const styles = StyleSheet.create( {
  icon: {
    paddingLeft: '6%',
    paddingRight: '6%',
  },
} )

const iconProps = {
  size: 30,
  color: 'rgb(47, 124, 246)',
}

const icons: IconsType = {
  SearchIcon: ( props ) => <Icon name="magnify" style={styles.icon} {...iconProps} {...props} />,
  HistoryIcon: ( props ) => <Icon name="history" style={styles.icon} {...iconProps} {...props} />,
  BookmarkIcon: ( props ) => <Icon name="bookmark-outline" style={styles.icon} {...iconProps} {...props} />,
  TabsIcon: ( props ) => <Icon name="layers-outline" style={styles.icon} {...iconProps} {...props} />,
  DotsIcon: ( props ) => <Icon name="dots-vertical" style={styles.icon} {...iconProps} {...props} />,
}

export default icons
