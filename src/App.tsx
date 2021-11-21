import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import withContexts from './components/with-contexts'
import { searchScreen } from './screens/Search'
import { gurbaniScreen } from './screens/Gurbani'
import { collectionsScreen } from './screens/Collections'
import { AppStackParams } from './screens/screens'

const screens = [ gurbaniScreen, searchScreen, collectionsScreen ]

const { Screen, Navigator } = createStackNavigator<AppStackParams>()

const App = () => (
  <NavigationContainer>
    <Navigator mode="modal">
      {screens.map( ( options ) => <Screen key={options.name} {...options} /> )}
    </Navigator>
  </NavigationContainer>
)

export default () => withContexts( <App /> )
