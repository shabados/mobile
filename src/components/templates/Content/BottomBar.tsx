import Icon from '@expo/vector-icons/MaterialIcons'
import { LinearGradient } from 'expo-linear-gradient'
import { useRouter } from 'expo-router'
import { Pressable, StyleSheet, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

import Button from '~/components/atoms/Button'
import Container from '~/components/atoms/Container'
import SearchBar from '~/components/molecules/SearchBar'
import { gradients, px, units } from '~/themes'

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
    minWidth: units.minimumTouchDimension * 2,
    marginLeft: units.horizontalLayoutMargin / 2,
  },
  container: {
    ...px( 10 ),
    flexDirection: 'row',
    alignItems: 'center',
  },
  containerPadding: {
    paddingBottom: units.horizontalLayoutMargin / 2,
  },
  root: {
    flex: 0,
  },
  searchBarContainer: {
    flex: 1,
  },
} )

const BottomBar = () => {
  const router = useRouter()

  const onSearchPress = () => router.navigate( '/search' )
  const onCollectionsPress = () => router.navigate( '/collections' )

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
