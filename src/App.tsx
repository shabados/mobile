import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator, StackNavigationOptions } from '@react-navigation/stack'

import withContexts from './components/with-contexts'
import { searchScreen } from './screens/Search'
import { gurbaniScreen } from './screens/Gurbani'
import { collectionsScreen } from './screens/Collections'
import { AppStackParams } from './screens/screens'

const screens = [ gurbaniScreen, searchScreen, collectionsScreen ]

const { Screen, Navigator } = createStackNavigator<AppStackParams>()

const defaultScreenOptions: StackNavigationOptions = { presentation: 'modal' }

const App = () => (
  <NavigationContainer>
    <Navigator defaultScreenOptions={defaultScreenOptions}>
      {screens.map( ( options ) => <Screen key={options.name} {...options} /> )}
    </Navigator>
  </NavigationContainer>
)

export default () => withContexts( <App /> )
