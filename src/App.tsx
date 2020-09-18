import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import HomeScreen from './screens/HomeScreen'
import SearchScreen from './screens/SearchScreen'

import Screens from './lib/screens'

const Stack = createStackNavigator()

const App = () => (
  <NavigationContainer>
    <Stack.Navigator headerMode="none">
      <Stack.Screen name={Screens.Home} component={HomeScreen} />
      <Stack.Screen name={Screens.Search} component={SearchScreen} />
    </Stack.Navigator>
  </NavigationContainer>
)

export default App
