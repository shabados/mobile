import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import withContexts from './components/with-contexts'
import { searchScreen } from './screens/Search'
import { gurbaniScreen } from './screens/Gurbani'

const screens = [ gurbaniScreen, searchScreen ]

const Stack = createStackNavigator()

type ScreenProps = Parameters<typeof Stack.Screen>[0]

const App = () => (
  <NavigationContainer>
    <Stack.Navigator mode="modal">
      {screens.map( ( props: ScreenProps ) => <Stack.Screen key={props.name} {...props} /> )}
    </Stack.Navigator>
  </NavigationContainer>
)

export default () => withContexts( <App /> )
