import {
  createMaterialTopTabNavigator,
  MaterialTopTabNavigationEventMap,
  MaterialTopTabNavigationOptions,
} from '@react-navigation/material-top-tabs'
import { ParamListBase, TabNavigationState } from '@react-navigation/native'
import { withLayoutContext } from 'expo-router'

const { Navigator } = createMaterialTopTabNavigator()

const TopTabs = withLayoutContext<
  MaterialTopTabNavigationOptions,
  typeof Navigator,
  TabNavigationState<ParamListBase>,
  MaterialTopTabNavigationEventMap
>( Navigator )

export default TopTabs
