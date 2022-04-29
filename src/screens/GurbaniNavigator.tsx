import { createNativeStackNavigator, NativeStackNavigationOptions } from '@react-navigation/native-stack'
import { StyleSheet } from 'react-native'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'

import IconHeaderButton from '../components/IconHeaderButton'
import Logo from '../components/Logo'
import isTablet from '../helpers/isTablet'
import Units from '../themes/units'
import { ContentType } from '../types/data'
import { GurbaniStackParams, GurbaniStackScreenProps } from '../types/navigation'
import GurbaniScreen from './Gurbani'

const { Navigator, Screen } = createNativeStackNavigator<GurbaniStackParams>()

const styles = StyleSheet.create( {
  headerTitle: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  left: {
    marginLeft: Units.HorizontalLayoutMargin * -1,
  },
  right: {
    marginRight: Units.HorizontalLayoutMargin * -1,
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
      {isTablet
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
    <Logo />
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
