import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createDrawerNavigator } from '@react-navigation/drawer'

import HomeScreen from './screens/HomeScreen'
import SearchScreen from './screens/SearchScreen'

import { SEARCH_SCREEN, HOME_SCREEN } from './lib/screens'

const Drawer = createDrawerNavigator()

const RootNavigator = () => (
  <Drawer.Navigator>
    <Drawer.Screen name={HOME_SCREEN} component={HomeScreen} />
    <Drawer.Screen name={SEARCH_SCREEN} component={SearchScreen} />
  </Drawer.Navigator>
)

const App = () => (
  <NavigationContainer>
    <RootNavigator />
  </NavigationContainer>
)

export default App
