import { createNativeStackNavigator, NativeStackNavigationOptions } from '@react-navigation/native-stack'

import { RootStackParams } from '../types/navigation'
import CollectionsNavigator from './CollectionsNavigator'
import HomeNavigator from './HomeNavigator'
import SearchScreen from './Search'
import SearchHeader from './Search/SearchHeader'

const { Navigator, Group, Screen } = createNativeStackNavigator<RootStackParams>()

const searchOptions: NativeStackNavigationOptions = { headerTitle: () => <SearchHeader /> }

const RootNavigator = () => (
  <Navigator screenOptions={{ presentation: 'modal' }}>
    <Group screenOptions={{ headerShown: false }}>
      <Screen name="Root.Home" component={HomeNavigator} />
      <Screen name="Root.Collections" component={CollectionsNavigator} />
    </Group>

    <Screen name="Root.Search" component={SearchScreen} options={searchOptions} />
  </Navigator>
)

export default RootNavigator
