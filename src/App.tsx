import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { SafeAreaProvider } from 'react-native-safe-area-context'

import HomeScreen from './screens/HomeScreen'
import SearchScreen from './screens/SearchScreen'

import Screens from './lib/screens'

const Stack = createStackNavigator()

const App = () => (
  <SafeAreaProvider>
    <NavigationContainer>
      <Stack.Navigator headerMode="none">
        <Stack.Screen name={Screens.Home} component={HomeScreen} />
        <Stack.Screen name={Screens.Search} component={SearchScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  </SafeAreaProvider>
)

export default App
