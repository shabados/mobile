import { RouteProp } from '@react-navigation/native'
import React from 'react'
import { Pressable, StyleSheet, Text, View } from 'react-native'
import { NativeStackNavigationProp } from 'react-native-screens/lib/typescript'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

import Colours from '../themes/colours'
import { BookmarksNavigatorParams, BookmarksNavigatorRoutes } from '../types/bookmarks'

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
const BookmarksListItem = ( {
  iconName,
  title,
  onPress,
  isFolder = false
}: BookmarksListItemProps ) => (
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
  route: RouteProp<BookmarksNavigatorParams, BookmarksNavigatorRoutes.bookmarks>,
  navigation: NativeStackNavigationProp<
  BookmarksNavigatorParams, BookmarksNavigatorRoutes.bookmarks
  >,
}
const BookmarksList = ( { route, navigation }: BookmarksListProps ) => {
  const { folderData, folder } = route.params
  return (
    <View>
      {folder
        ? folderData
          .find( ( data ) => data.folderName === folder )
          ?.items
          ?.map( ( item ) => <BookmarksListItem iconName={item.type} title={item.name} key={`${folder}-${item.name}`} onPress={() => { }} /> )
        : folderData.map( ( data ) => <BookmarksListItem iconName="folder" title={data.folderName} isFolder key={data.folderName} onPress={() => { navigation.push( BookmarksNavigatorRoutes.bookmarks, { folder: data.folderName, folderData } ) }} /> )}
    </View>
  )
}

export { BookmarksList, BookmarksListItem }
