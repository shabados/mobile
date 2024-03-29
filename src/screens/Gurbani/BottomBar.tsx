import { useNavigation } from '@react-navigation/native'
import { Pressable, StyleSheet, View } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import Icon from 'react-native-vector-icons/MaterialIcons'

import Button from '../../components/Button'
import Container from '../../components/Container'
import SearchBar from '../../components/SearchBar'
import { gradients } from '../../themes/gradients'
import Units from '../../themes/units'
import { px } from '../../themes/utils'
import { HomeTabScreenProps } from '../../types/navigation'

const styles = StyleSheet.create( {
  background: {
    position: 'absolute',
    top: -40,
    bottom: 0,
    left: 0,
    right: 0,
  },
  button: {
    fontSize: 28,
  },
  buttonContainer: {
    minWidth: Units.MinimumTouchDimension * 2,
    marginLeft: Units.HorizontalLayoutMargin / 2,
  },
  container: {
    ...px( 10 ),
    flexDirection: 'row',
    alignItems: 'center',
  },
  containerPadding: {
    paddingBottom: Units.HorizontalLayoutMargin / 2,
  },
  root: {
    flex: 0,
  },
  searchBarContainer: {
    flex: 1,
  },
} )

const BottomBar = () => {
  const navigation = useNavigation<HomeTabScreenProps<'Home.Tab.Gurbani'>['navigation']>()

  const onSearchPress = () => navigation.navigate( 'Root.Search' )
  const onCollectionsPress = () => navigation.navigate( 'Root.Collections' )

  const { bottom } = useSafeAreaInsets()
  const hasBottomSafeArea = bottom > 0

  return (
    <Container style={styles.root} safeArea bottom>
      <LinearGradient
        pointerEvents="none"
        style={styles.background}
        locations={gradients.TransparentToBackground.locations}
        colors={gradients.TransparentToBackground.colors}
      />

      <View style={[ styles.container, !hasBottomSafeArea && styles.containerPadding ]}>
        <Pressable style={styles.searchBarContainer} onPress={onSearchPress}>
          <SearchBar editable={false} onTouchStart={onSearchPress} />
        </Pressable>

        <Button onPress={onCollectionsPress} style={styles.buttonContainer}>
          <Icon name="bookmark-outline" style={styles.button} testID="collections-icon" />
        </Button>
      </View>
    </Container>
  )
}

export default BottomBar
