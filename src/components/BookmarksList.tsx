import { RouteProp } from '@react-navigation/native'
import React from 'react'
import { Pressable, StyleSheet, Text, View } from 'react-native'
import { NativeStackNavigationProp } from 'react-native-screens/lib/typescript'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

import Colours from '../themes/colours'
import {
  BookmarksNavigatorParams,
  BookmarksNavigatorRoutes,
  BookmarkIcon,
} from '../types/bookmarks'

type BookmarksListItemProps = {
  iconName: string,
  title: string,
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

export const BookmarksListItem = ( {
  iconName,
  title,
  onPress,
}: BookmarksListItemProps ) => (
  <Pressable style={BookmarksListItemStyles.container} onPress={onPress}>
    <View style={BookmarksListItemStyles.leftContainer}>
      <Icon
        name={iconName}
        style={BookmarksListItemStyles.leftIcon}
        size={25}
      />
      <Text style={BookmarksListItemStyles.text}>{title}</Text>
    </View>

    {iconName === BookmarkIcon.folder && (
      <Icon
        name="chevron-right"
        size={25}
        style={BookmarksListItemStyles.rightIcon}
      />
    )}
  </Pressable>
)

type BookmarksListProps = {
  route: RouteProp<BookmarksNavigatorParams, BookmarksNavigatorRoutes.bookmarks>,
  navigation: NativeStackNavigationProp<
  BookmarksNavigatorParams,
  BookmarksNavigatorRoutes.bookmarks
  >,
}

const BookmarksList = ( { route, navigation }: BookmarksListProps ) => {
  const { folder, data: folderData } = route.params

  return (
    <View>
      {folder
        ? folderData
          .find( ( data ) => data.name === folder )
          ?.items?.map( ( item ) => (
            <BookmarksListItem
              iconName={item.icon}
              title={item.name}
              key={`${folder}-${item.name}`}
              onPress={() => {}}
            />
          ) )
        : folderData.map( ( data ) => (
          <BookmarksListItem
            iconName={data.icon}
            title={data.name}
            key={data.name}
            onPress={() => {
              navigation.push( BookmarksNavigatorRoutes.bookmarks, {
                folder: data.name,
                data: folderData,
              } )
            }}
          />
        ) )}
    </View>
  )
}

export default BookmarksList
