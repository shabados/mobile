import { Layout } from '@react-navigation/elements'
import { Dimensions } from 'react-native'

import Empty from '../components/Empty'
import createTabNavigator from '../components/TabNavigator'
import { HomeTabParams } from '../types/navigation'
import GurbaniNavigator from './GurbaniNavigator'
import SettingsNavigator from './SettingsNavigator'

const { Navigator, Screen } = createTabNavigator<HomeTabParams>()

const initialLayout: Partial<Layout> = {
  width: Dimensions.get( 'window' ).width,
}

const HomeNavigator = () => (
  <Navigator tabBar={Empty} initialLayout={initialLayout}>
    <Screen name="Home.Tab.Gurbani" component={GurbaniNavigator} />
    <Screen name="Home.Tab.Settings" component={SettingsNavigator} />
  </Navigator>
)

export default HomeNavigator
