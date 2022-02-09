import { createStackNavigator, StackNavigationOptions } from '@react-navigation/stack'

import { RootStackParams } from '../types/navigation'
import CollectionsNavigator from './CollectionsNavigator'
import HomeNavigator from './HomeNavigator'
import SearchScreen from './Search'

const { Navigator, Group, Screen } = createStackNavigator<RootStackParams>()

const groupOptions: StackNavigationOptions = {
  presentation: 'modal',
  cardStyle: { backgroundColor: 'transparent' },
}

const RootNavigator = () => (
  <Navigator>
    <Group screenOptions={groupOptions}>
      <Screen name="Root.Home" component={HomeNavigator} />
      <Screen name="Root.Collections" component={CollectionsNavigator} />
      <Screen name="Root.Search" component={SearchScreen} />
    </Group>
  </Navigator>
)

export default RootNavigator
