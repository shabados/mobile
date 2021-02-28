import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import withContexts from './components/with-contexts'
import { leftDrawer } from './screens/LeftDrawer'
import { AppStackParams } from './lib/screens'

const { Screen, Navigator } = createStackNavigator<AppStackParams>()

const App = () => (
  <NavigationContainer>
    <Navigator mode="modal">
      <Screen key={leftDrawer.name} {...leftDrawer} />
    </Navigator>
  </NavigationContainer>
)

export default () => withContexts( <App /> )
