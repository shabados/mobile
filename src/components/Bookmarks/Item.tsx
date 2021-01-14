import React from 'react'
import { Pressable, PressableProps, StyleSheet, Text } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

import Colours from '../../themes/colours'

const styles = StyleSheet.create( {
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 5,
    backgroundColor: Colours.White,
  },
} )

type BookmarkListItemProps = {
  title: string,
  isFolder: boolean,
  onPress: () => void,
} & PressableProps

const BookmarkListItem = ( { title, isFolder, onPress, ...props }: BookmarkListItemProps ) => (
  <Pressable style={styles.container} onPress={onPress} {...props}>
    <Text>{title}</Text>
    {isFolder && <Icon name="chevron-right" size={25} />}
  </Pressable>
)

export default BookmarkListItem
