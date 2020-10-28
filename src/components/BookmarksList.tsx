import { RouteProp } from '@react-navigation/native'
import React from 'react'
import { Pressable, StyleSheet, Text, View } from 'react-native'
import { NativeStackNavigationProp } from 'react-native-screens/lib/typescript'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

import { BookmarksNavigatorParams } from '../screens/Bookmarks'
import Colours from '../themes/colours'

const testListData = [
  {
    name: 'bookmarks section 1',
    items: [
      {
        name: 'yo',
        icon: 'account',
      },
      {
        name: 'testing',
        icon: 'chevron-up',
      },
    ],
  },
  {
    name: 'section 2',
    items: [
      {
        name: 'hm',
        icon: 'wrench',
      },
      {
        name: 'i ask too many questins',
        icon: 'wrench',
      },
    ],
  },
]

type BookmarksListItemProps = {
  iconName: string,
  title: string,
  isFolder?: boolean,
  onPress: () => void,
}

const BookmarksListItemStyles = StyleSheet.create( {
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    padding: 5,
    backgroundColor: Colours.White,
    borderBottomWidth: 1,
    borderColor: Colours.MediumGray,
  },
  leftContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  leftIcon: {
    color: Colours.Blue,
  },
  rightIcon: {
    marginLeft: 'auto',
  },
  text: {
    justifyContent: 'center',
    fontSize: 16,
    marginHorizontal: 5,
  },
} )
const BookmarksListItem = (
  { iconName, title, onPress, isFolder = false }: BookmarksListItemProps,
) => (
  <Pressable
    style={BookmarksListItemStyles.container}
    onPress={onPress}
  >
    <View style={BookmarksListItemStyles.leftContainer}>
      <Icon name={iconName} style={BookmarksListItemStyles.leftIcon} size={25} />
      <Text style={BookmarksListItemStyles.text}>{title}</Text>
    </View>
    {isFolder && <Icon name="chevron-right" size={25} style={BookmarksListItemStyles.rightIcon} />}
  </Pressable>
)

type BookmarksListProps = {
  route: RouteProp<BookmarksNavigatorParams, 'BookmarksList'>,
  navigation: NativeStackNavigationProp<BookmarksNavigatorParams, 'BookmarksList'>,
}
const BookmarksList = ( { route, navigation }: BookmarksListProps ) => {
  const folder = route.params?.folder
  return (
    <View>
      {folder
        ? testListData
          .find( ( item ) => item.name === folder )
          ?.items
          ?.map( ( item ) => <BookmarksListItem iconName={item.icon} title={item.name} key={`${folder}-${item.name}`} onPress={() => { }} /> )
        : testListData.map( ( folderData ) => <BookmarksListItem iconName="folder" title={folderData.name} isFolder key={folderData.name} onPress={() => { navigation.push( 'BookmarksList', { folder: folderData.name } ) }} /> )}
    </View>
  )
}

export { BookmarksList, BookmarksListItem }
