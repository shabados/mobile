import { NavigationContainer } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { ReactNode } from 'react'

import withContexts from '../../src/components/with-contexts'

export type WrapperProps = { children: ReactNode }

export const wrapper = ( { children }: WrapperProps ) => withContexts(
  <NavigationContainer>
    {children}
  </NavigationContainer>,
)

export const getNavigationMock = () => [
  'addListener',
  'canGoBack',
  'dispatch',
  'getParent',
  'goBack',
  'isFocused',
  'navigate',
  'removeListener',
  'reset',
  'push',
  'replace',
].reduce(
  ( mock, property ) => ( { ...mock, [ property ]: jest.fn() } ),
  {} as NativeStackNavigationProp<any>
)
