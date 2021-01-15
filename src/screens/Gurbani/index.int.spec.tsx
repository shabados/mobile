import React, { ReactNode } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { render } from '@testing-library/react-native'
import { when } from 'jest-when'

import factories from '../../../test/factories'
import withContexts from '../../components/with-contexts'
import * as shabads from '../../data/shabads'

import GurbaniScreen from '.'

const Stack = createStackNavigator()

type WrapperProps = { children: ReactNode }
const wrapper = ( { children }: WrapperProps ) => withContexts(
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="default">{() => children}</Stack.Screen>
    </Stack.Navigator>
  </NavigationContainer>,
)

describe( '<GurbaniScreen />', () => {
  describe( 'on mount', () => {
    const getShabadMock = jest.spyOn( shabads, 'getShabad' )
    when( getShabadMock )
      .calledWith( 'DMP' )
      .mockResolvedValue( factories.line.buildList( 5 ) )

    it( 'should render a bottom bar', () => {
      const { unmount, getByPlaceholderText } = render( <GurbaniScreen />, { wrapper } )

      expect( getByPlaceholderText( 'Search' ) ).toBeTruthy()

      unmount()
    } )

    it( 'should load and render a target shabad', async () => {
      const { unmount, findByText } = render( <GurbaniScreen />, { wrapper } )

      expect( await findByText( 'test-gurmukhi' ) ).toBeTruthy()

      unmount()
    } )
  } )
} )
