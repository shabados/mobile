import { useNavigation } from '@react-navigation/native'
import { StackScreenProps } from '@react-navigation/stack'
import { Pressable, SafeAreaView, StyleSheet, View } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import Icon from 'react-native-vector-icons/MaterialIcons'

import Button from '../../components/Button'
import SearchBar from '../../components/SearchBar'
import { gradients } from '../../themes/gradients'
import Units from '../../themes/units'
import { px, py } from '../../themes/utils'
import Screens, { AppStackParams } from '../screens'

const styles = StyleSheet.create( {
  background: {
    position: 'absolute',
    top: -20,
    bottom: 0,
    left: 0,
    right: 0,
  },
  button: {
    fontSize: 28,
  },
  buttonContainer: {
    minWidth: Units.MinimumTouchDimension * 2,
    marginRight: 0,
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
  const navigation = useNavigation<StackScreenProps<AppStackParams>['navigation']>()

  const onSearchPress = () => navigation.navigate( Screens.Search )
  const onCollectionsPress = () => navigation.navigate( Screens.Collections )

  return (
    <SafeAreaView>
      <LinearGradient
        style={styles.background}
        locations={gradients.TransparentToBackground.locations}
        colors={gradients.TransparentToBackground.colors}
      />

      <View style={styles.container}>
        <Pressable style={styles.searchBarContainer} onPress={onSearchPress}>
          <SearchBar editable={false} onTouchStart={onSearchPress} />
        </Pressable>

        <Button onPress={onCollectionsPress} style={styles.buttonContainer}>
          <Icon name="bookmark-outline" style={styles.button} testID="collections-icon" />
        </Button>
      </View>
    </SafeAreaView>
  )
}

export default BottomBar
