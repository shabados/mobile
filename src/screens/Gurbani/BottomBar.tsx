import React from 'react'
import { Pressable, SafeAreaView, StyleSheet, View } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { useNavigation } from '@react-navigation/native'

import Screens from '../../lib/screens'
import Colours from '../../themes/colours'
import { px, py } from '../../themes/utils'
import { SearchBar } from '../../components/Search'
import Button from '../../components/Button'

const styles = StyleSheet.create( {
  background: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    opacity: 0.9,
    backgroundColor: Colours.MediumGray,
  },
  button: {
    fontSize: 26,
  },
  container: {
    ...px( 10 ),
    ...py( 10 ),
    flexDirection: 'row',
    alignItems: 'center',
  },
  searchBarContainer: {
    flex: 1,
  },
} )

const BottomBar = () => {
  const navigation = useNavigation()

  const onSearchPress = () => navigation.navigate( Screens.Search )
  const onBookmarkPress = () => navigation.navigate( Screens.Bookmarks )

  return (
    <SafeAreaView>
      <View style={styles.background} />

      <View style={styles.container}>
        <Pressable style={styles.searchBarContainer} onPress={onSearchPress}>
          <SearchBar editable={false} onTouchStart={onSearchPress} />
        </Pressable>

        <Button onPress={onBookmarkPress}>
          <Icon name="bookmark-outline" style={styles.button} testID="bookmarks-icon" />
        </Button>
      </View>
    </SafeAreaView>
  )
}

export default BottomBar
