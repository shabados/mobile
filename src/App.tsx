import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import SearchScreen from './screens/SearchScreen'
import GurbaniScreen from './screens/GurbaniScreen'
import Screens from './lib/screens'
import withContexts from './components/with-contexts'
import { headerOptions } from './components/Navbar'

const Stack = createStackNavigator()

const App = () => (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen
        name={Screens.Gurbani}
        component={GurbaniScreen}
        options={headerOptions}
      />

      <Stack.Screen name={Screens.Search} component={SearchScreen} />
    </Stack.Navigator>
  </NavigationContainer>
)

export default () => withContexts( <App /> )
