import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import HomeScreen from './screens/HomeScreen'
import SearchScreen from './screens/SearchScreen'
import GurbaniScreen from './screens/GurbaniScreen'
import Screens from './lib/screens'
import withContexts from './components/with-contexts'

const Stack = createStackNavigator()

const App = () => (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen
        name={Screens.Gurbani}
        component={GurbaniScreen}
      />

      <Stack.Screen name={Screens.Search} component={SearchScreen} />
    </Stack.Navigator>
  </NavigationContainer>
)

export default () => withContexts( <App /> )
