import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { render } from '@testing-library/react-native'

import * as factories from '../../../test/factories'
import withContexts from '../../components/with-contexts'
import * as shabads from '../../data/shabads'
import { AppStackParams } from '../screens'

import { gurbaniScreen } from '.'

const Stack = createStackNavigator<AppStackParams>()

const GurbaniScreenWrapper = () => withContexts(
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen {...gurbaniScreen} />
    </Stack.Navigator>
  </NavigationContainer>,
)

describe( '<GurbaniScreen />', () => {
  describe( 'on mount', () => {
    const shabadData = factories.shabad.build()
    jest.spyOn( shabads, 'getShabad' ).mockResolvedValue( shabadData )

    it( 'should render a bottom bar', () => {
      const { unmount, getByPlaceholderText } = render( <GurbaniScreenWrapper /> )

      expect( getByPlaceholderText( 'Search' ) ).toBeTruthy()

      unmount()
    } )

    it( 'should load and render a target shabad', async () => {
      const { unmount, findByText } = render( <GurbaniScreenWrapper /> )

      expect( await findByText( shabadData.lines[ 0 ].gurmukhi ) ).toBeTruthy()

      unmount()
    } )
  } )
} )
