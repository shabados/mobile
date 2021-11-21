import React from 'react'
import { Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { fireEvent, render } from '@testing-library/react-native'

import * as factories from '../../../test/factories'
import Screens, { AppStackParams } from '../screens'
import * as lines from '../../data/search'
import withContexts from '../../components/with-contexts'

import { searchScreen } from '.'

type StackParamList = AppStackParams & {
  [Screens.Search]: undefined,
  [Screens.Gurbani]: LineData,
}

const Stack = createStackNavigator<StackParamList>()

const SearchScreenWrapper = () => withContexts(
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen {...searchScreen} />
      <Stack.Screen name={Screens.Gurbani}>
        {( { route: { params: { gurmukhi } } } ) => <Text>{gurmukhi}</Text>}
      </Stack.Screen>
    </Stack.Navigator>
  </NavigationContainer>,
)

describe( '<SearchScreen />', () => {
  const searchResults = factories.search.buildList( 5 )
  jest.spyOn( lines, 'search' ).mockResolvedValue( searchResults )

  describe( 'on mount', () => {
    it( 'should render a search bar', () => {
      const { unmount, getByPlaceholderText } = render( <SearchScreenWrapper /> )

      expect( getByPlaceholderText( 'Search' ) ).toBeTruthy()

      unmount()
    } )
  } )

  describe( 'on search', () => {
    it( 'should render results', async () => {
      const { unmount, findByText, getByPlaceholderText } = render( <SearchScreenWrapper /> )

      fireEvent.changeText( getByPlaceholderText( 'Search' ), 'hhg' )

      expect( await findByText( searchResults[ 0 ].line.gurmukhi ) ).toBeTruthy()

      unmount()
    } )
  } )

  describe( 'on press', () => {
    const setup = () => {
      const screen = render( <SearchScreenWrapper /> )
      const { getByPlaceholderText } = screen

      fireEvent.changeText( getByPlaceholderText( 'Search' ), 'hhg' )

      return screen
    }

    it( 'should navigate to the Gurbani screen', async () => {
      const { unmount, findByText } = setup()

      fireEvent.press( await findByText( searchResults[ 0 ].line.gurmukhi ) )

      unmount()
    } )
  } )
} )
