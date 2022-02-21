import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import { Dimensions } from 'react-native'

import { HomeTabParams } from '../types/navigation'
import GurbaniNavigator from './GurbaniNavigator'
import SettingsNavigator from './SettingsNavigator'

const { Navigator, Screen } = createMaterialTopTabNavigator<HomeTabParams>()

const initialLayout = { width: Dimensions.get( 'window' ).width }
const EmptyTabBar = () => null

const HomeNavigator = () => (
  <Navigator tabBar={EmptyTabBar} initialLayout={initialLayout}>
    <Screen name="Home.Tab.Gurbani" component={GurbaniNavigator} />
    <Screen name="Home.Tab.Settings" component={SettingsNavigator} />
  </Navigator>
)

export default HomeNavigator
