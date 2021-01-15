import React, { ReactNode } from 'react'
import { Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { fireEvent, render } from '@testing-library/react-native'

import factories from '../../../test/factories'
import Screens from '../../lib/screens'
import { LineData } from '../../types/data'
import * as lines from '../../data/lines'
import withContexts from '../../components/with-contexts'

import SearchScreen from '.'

type StackParamList = {
  [Screens.Search]: undefined,
  [Screens.Gurbani]: LineData,
}

const Stack = createStackNavigator<StackParamList>()

type WrapperProps = { children: ReactNode }
const wrapper = ( { children }: WrapperProps ) => withContexts(
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name={Screens.Search}>{() => children}</Stack.Screen>
      <Stack.Screen name={Screens.Gurbani}>
        {( { route: { params: { gurmukhi } } } ) => <Text>{gurmukhi}</Text>}
      </Stack.Screen>
    </Stack.Navigator>
  </NavigationContainer>,
)

describe( '<SearchScreen />', () => {
  const searchResults = factories.line.buildList( 5 )
  jest.spyOn( lines, 'search' ).mockResolvedValue( searchResults )

  describe( 'on mount', () => {
    it( 'should render a search bar', () => {
      const { unmount, getByPlaceholderText } = render( <SearchScreen />, { wrapper } )

      expect( getByPlaceholderText( 'Search' ) ).toBeTruthy()

      unmount()
    } )
  } )

  describe( 'on search', () => {
    it( 'should render results', async () => {
      const { unmount, findByText, getByPlaceholderText } = render( <SearchScreen />, { wrapper } )

      fireEvent.changeText( getByPlaceholderText( 'Search' ), 'hhg' )

      expect( await findByText( searchResults[ 0 ].gurmukhi ) ).toBeTruthy()

      unmount()
    } )
  } )

  describe( 'on press', () => {
    const setup = () => {
      const screen = render( <SearchScreen />, { wrapper } )
      const { getByPlaceholderText } = screen

      fireEvent.changeText( getByPlaceholderText( 'Search' ), 'hhg' )

      return screen
    }

    it( 'should navigate to the Gurbani screen', async () => {
      const { unmount, findByText } = setup()

      fireEvent.press( await findByText( searchResults[ 0 ].gurmukhi ) )

      unmount()
    } )
  } )
} )
