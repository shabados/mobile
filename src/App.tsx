import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import withContexts from './components/with-contexts'
import { searchScreen } from './screens/Search'
import { gurbaniScreen } from './screens/Gurbani'

const screens = [ gurbaniScreen, searchScreen ]

const { Screen, Navigator } = createStackNavigator()

type ScreenProps = Parameters<typeof Screen>[0]

const App = () => (
  <NavigationContainer>
    <Navigator mode="modal">
      {screens.map( ( props: ScreenProps ) => <Screen key={props.name} {...props} /> )}
    </Navigator>
  </NavigationContainer>
)

export default () => withContexts( <App /> )
