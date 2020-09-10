import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createDrawerNavigator } from '@react-navigation/drawer'

import HomeScreen from './screens/HomeScreen'
import SearchScreen from './screens/SearchScreen'
import DataManager from './screens/DataManager'

import { SEARCH_SCREEN, HOME_SCREEN } from './lib/screens'

const Drawer = createDrawerNavigator()

const App = () => (
  <NavigationContainer>
    <RootNavigator />
  </NavigationContainer>
)

const RootNavigator = (): JSX.Element => (
  <Drawer.Navigator>
    <Drawer.Screen name={HOME_SCREEN} component={HomeScreen} />
    <Drawer.Screen name={SEARCH_SCREEN} component={SearchScreen} />
    <Drawer.Screen name="DataManager" component={DataManager} />
  </Drawer.Navigator>
)

export default App
