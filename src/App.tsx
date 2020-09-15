import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createDrawerNavigator } from '@react-navigation/drawer'

import HomeScreen from './screens/HomeScreen'
import SearchScreen from './screens/SearchScreen'

import Screens from './lib/screens'

const Drawer = createDrawerNavigator()

const App = () => (
  <NavigationContainer>

    <Drawer.Navigator>
      <Drawer.Screen name={Screens.Home} component={HomeScreen} />
      <Drawer.Screen name={Screens.Search} component={SearchScreen} />
    </Drawer.Navigator>

  </NavigationContainer>
)

export default App
