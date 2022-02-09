import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import { Dimensions } from 'react-native'

import { ContentType } from '../types/data'
import { HomeTabParams } from '../types/navigation'
import GurbaniScreen from './Gurbani'
import SettingsScreen from './Settings'

const { Group, Navigator, Screen } = createMaterialTopTabNavigator<HomeTabParams>()

const initialLayout = { width: Dimensions.get( 'window' ).width }
const EmptyTabBar = () => null

const HomeNavigator = () => (
  <Navigator tabBar={EmptyTabBar} initialLayout={initialLayout}>
    <Group>
      <Screen
        name="Home.Gurbani"
        component={GurbaniScreen}
        initialParams={{
          id: '1YU',
          type: ContentType.Shabad,
        }}
      />

      <Screen name="Home.Settings" component={SettingsScreen} />
    </Group>
  </Navigator>
)

export default HomeNavigator
