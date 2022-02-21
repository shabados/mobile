import { createNativeStackNavigator, NativeStackNavigationOptions } from '@react-navigation/native-stack'
import { Image, StyleSheet, View } from 'react-native'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'

import logo from '../../assets/images/logo.png'
import IconHeaderButton from '../components/IconHeaderButton'
import Typography from '../components/Typography'
import Colors from '../themes/colors'
import { px } from '../themes/utils'
import { ContentType } from '../types/data'
import { GurbaniStackParams, GurbaniStackScreenProps } from '../types/navigation'
import GurbaniScreen from './Gurbani'

const { Navigator, Screen } = createNativeStackNavigator<GurbaniStackParams>()

const styles = StyleSheet.create( {
  headerIcon: {
    color: Colors.PrimaryText,
    fontSize: 28,
    ...px( 10 ),
  },
  headerTitle: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  logoIcon: {
    width: 28,
    height: 28,
    marginRight: 10,
  },
  logoText: {
    fontSize: 20,
    fontWeight: '300',
  },
} )

const getOptions = ( {
  navigation,
}: GurbaniStackScreenProps<'Gurbani.View'> ): NativeStackNavigationOptions => ( {
  headerLeft: () => (
    <HeaderButtons HeaderButtonComponent={IconHeaderButton}>
      <Item
        title="menu"
        iconName="menu"
        testID="navbar-menu"
        disabled
      />
    </HeaderButtons>
  ),
  headerRight: () => (
    <HeaderButtons HeaderButtonComponent={IconHeaderButton}>
      <Item
        title="settings"
        iconName="ios-options-outline"
        testID="navbar-settings"
        onPress={() => navigation.navigate( 'Home.Tab.Settings', { screen: 'Settings.View' } )}
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
