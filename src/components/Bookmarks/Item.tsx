import React from 'react'
import { Pressable, PressableProps, StyleSheet, Text } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

import Colors from '../../themes/colors'
import { py } from '../../themes/utils'

const styles = StyleSheet.create( {
  chevron: {
    color: Colors.PrimaryText,
  },
  container: {
    ...py( 15 ),
    paddingLeft: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: Colors.Disabled,
  },
  title: {
    color: Colors.PrimaryText,
    fontSize: 18,
  },
} )

type BookmarkListItemProps = {
  title: string,
  isFolder: boolean,
  onPress: () => void,
} & PressableProps

const BookmarkListItem = ( { title, isFolder, onPress, ...props }: BookmarkListItemProps ) => (
  <Pressable style={styles.container} onPress={onPress} {...props}>
    <Text style={styles.title}>{title}</Text>
    {isFolder && <Icon style={styles.chevron} name="chevron-right" size={25} />}
  </Pressable>
)

export default BookmarkListItem
