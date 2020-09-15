import React from 'react'
import { StyleSheet } from 'react-native'
import { createIconSetFromFontello } from 'react-native-vector-icons'

import { IconsType } from './Icons.types'

import fontelloConfig from '../../../assets/fonts/fontello-icons.json'

const Icon = createIconSetFromFontello( fontelloConfig )

const styles = StyleSheet.create( {
  icon: {
    paddingLeft: '8%',
    paddingRight: '8%',
  },
} )

const iconProps = {
  size: 20,
  color: 'rgb(47, 124, 246)',
}

const icons: IconsType = {
  SearchIcon: ( props ) => <Icon name="search" style={styles.icon} {...iconProps} {...props} />,
  HistoryIcon: ( props ) => <Icon name="history" style={styles.icon} {...iconProps} {...props} />,
  BookmarkIcon: ( props ) => <Icon name="bookmark" style={styles.icon} {...iconProps} {...props} />,
  TabsIcon: ( props ) => <Icon name="tabs" style={styles.icon} {...iconProps} {...props} />,
  DotsIcon: ( props ) => <Icon name="ellipsis" style={styles.icon} {...iconProps} {...props} />,
}

export default icons
