import React, { ReactNode } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import withContexts from '../components/with-contexts'

const { Screen, Navigator } = createStackNavigator()

type WrapperProps = { children: ReactNode }

const Wrapper = ( { children }: WrapperProps ) => withContexts(
  <NavigationContainer>
    <Navigator>
      <Screen name="default">{() => children}</Screen>
    </Navigator>
  </NavigationContainer>,
)

export default Wrapper
