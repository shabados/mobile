import React, { ReactNode } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import withContexts from '../../src/components/with-contexts'

const { Screen, Navigator } = createStackNavigator()

export type WrapperProps = {
  children: ReactNode,
  initialParams?: Record<string, any>,
  name?:string,
}

const Wrapper = ( { children, initialParams, name = 'default' }: WrapperProps ) => withContexts(
  <NavigationContainer>
    <Navigator>
      <Screen name={name} initialParams={initialParams}>{() => children}</Screen>
    </Navigator>
  </NavigationContainer>,
)

export default Wrapper
