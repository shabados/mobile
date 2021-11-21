import React from 'react'
import { Pressable, StyleSheet, View } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { useNavigation } from '@react-navigation/native'
import { SafeAreaView } from 'react-native-safe-area-context'

import Screens from '../screens'
import { px, py } from '../../themes/utils'
import Button from '../../components/Button'
import SearchBar from '../../components/SearchBar'

const styles = StyleSheet.create( {
  background: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    opacity: 0.9,
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
  root: {
    marginTop: 'auto',
  },
  searchBarContainer: {
    flex: 1,
  },
} )

const BottomBar = () => {
  const navigation = useNavigation()

  const onSearchPress = () => navigation.navigate( Screens.Search )
  const onCollectionsPress = () => navigation.navigate( Screens.Collections )

  return (
    <SafeAreaView style={styles.root} edges={[ 'bottom', 'left', 'right' ]}>
      <View style={styles.background} />

      <View style={styles.container}>
        <Pressable style={styles.searchBarContainer} onPress={onSearchPress}>
          <SearchBar editable={false} onTouchStart={onSearchPress} />
        </Pressable>

        <Button onPress={onCollectionsPress}>
          <Icon name="bookmark-outline" style={styles.button} testID="collections-icon" />
        </Button>
      </View>
    </SafeAreaView>
  )
}

export default BottomBar
