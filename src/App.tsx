import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import Screens from './lib/screens'
import withContexts from './components/with-contexts'
import SearchScreen from './screens/Search'
import { gurbaniScreen } from './screens/Gurbani'

const Stack = createStackNavigator()

const App = () => (
  <NavigationContainer>
    <Stack.Navigator mode="modal">
      <Stack.Screen name={Screens.Gurbani} {...gurbaniScreen} />

      <Stack.Screen
        name={Screens.Search}
        component={SearchScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  </NavigationContainer>
)

export default () => withContexts( <App /> )
