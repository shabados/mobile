import { createNativeStackNavigator, NativeStackNavigationOptions } from '@react-navigation/native-stack'
import { Image, StyleSheet, View } from 'react-native'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'

import logo from '../../assets/images/logo.png'
import IconHeaderButton from '../components/IconHeaderButton'
import Typography from '../components/Typography'
import isTablet from '../helpers/isTablet'
import { ContentType } from '../types/data'
import { GurbaniStackParams, GurbaniStackScreenProps } from '../types/navigation'
import GurbaniScreen from './Gurbani'

const xlarge = isTablet

const { Navigator, Screen } = createNativeStackNavigator<GurbaniStackParams>()

const styles = StyleSheet.create( {
  headerTitle: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  left: {
    marginLeft: -16,
  },
  logoIcon: {
    width: 28,
    height: 28,
    marginRight: 6.5,
  },
  logoText: {
    fontSize: 20,
    lineHeight: 24,
    fontWeight: '300',
  },
  right: {
    marginRight: -16,
  },
} )

const getOptions = ( {
  navigation,
}: GurbaniStackScreenProps<'Gurbani.View'> ): NativeStackNavigationOptions => ( {
  headerTitleAlign: 'center',
  headerLeft: () => (
    <HeaderButtons HeaderButtonComponent={IconHeaderButton}>
      <Item
        title="menu"
        iconName="menu"
        testID="navbar-menu"
        disabled
        style={styles.left}
      />
    </HeaderButtons>
  ),
  headerRight: () => (
    <HeaderButtons HeaderButtonComponent={IconHeaderButton}>
      {xlarge
      && (
      <>
        <Item
          title="search"
          iconName="search-outline"
          testID="navbar-settings"
          onPress={() => navigation.navigate( 'Root.Search' )}
        />
        <Item
          title="collections"
          iconName="bookmark-outline"
          testID="navbar-settings"
          onPress={() => navigation.navigate( 'Root.Collections' )}
        />
      </>
      )}
      <Item
        title="settings"
        iconName="options-outline"
        testID="navbar-settings"
        onPress={() => navigation.navigate( 'Home.Tab.Settings', { screen: 'Settings.View' } )}
        style={styles.right}
      />
    </HeaderButtons>
  ),
  headerTitle: () => (
    <View style={styles.headerTitle}>
      <Image style={styles.logoIcon} source={logo} />
      <Typography style={styles.logoText}>Shabad OS</Typography>
    </View>
  ),
} )

const GurbaniNavigator = () => (
  <Navigator>
    <Screen
      name="Gurbani.View"
      component={GurbaniScreen}
      options={getOptions}
      initialParams={{
        id: '1YU',
        type: ContentType.Shabad,
      }}
    />
  </Navigator>
)

export default GurbaniNavigator
