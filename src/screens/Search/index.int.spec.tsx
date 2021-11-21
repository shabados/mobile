import React from 'react'
import { Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { fireEvent, render } from '@testing-library/react-native'

import * as factories from '../../../test/factories'
import Screens, { AppStackParams } from '../screens'
import { LineData, SearchData } from '../../types/data'
import * as lines from '../../data/search'
import withContexts from '../../components/with-contexts'

import { searchScreen } from '.'

type StackParamList = AppStackParams & {
  [Screens.Search]: undefined,
  [Screens.Gurbani]: LineData,
}

const Stack = createStackNavigator<StackParamList>()

const setup = ( results = factories.search.buildList( 5 ) ) => {
  jest.spyOn( lines, 'search' ).mockResolvedValue( results )

  return render( withContexts(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen {...searchScreen} />
        <Stack.Screen name={Screens.Gurbani}>
          {( { route: { params: { gurmukhi } } } ) => <Text>{gurmukhi}</Text>}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>,
  ) )
}

describe( '<SearchScreen />', () => {
  describe( 'on mount', () => {
    it( 'should render a search bar', () => {
      const { unmount, getByPlaceholderText } = setup()

      expect( getByPlaceholderText( 'Search' ) ).toBeTruthy()

      unmount()
    } )
  } )

  describe( 'on search', () => {
    it( 'should render results', async () => {
      const results = factories.search.buildList( 5 )
      const { unmount, findByText, getByPlaceholderText } = setup( results )

      fireEvent.changeText( getByPlaceholderText( 'Search' ), 'hhg' )

      expect( await findByText( results[ 0 ].line.gurmukhi ) ).toBeTruthy()

      unmount()
    } )
  } )

  describe( 'on press', () => {
    const localSetup = ( results: SearchData[] ) => {
      const screen = setup( results )
      const { getByPlaceholderText } = screen

      fireEvent.changeText( getByPlaceholderText( 'Search' ), 'hhg' )

      return screen
    }

    it( 'should navigate to the Gurbani screen', async () => {
      const results = factories.search.buildList( 5 )
      const { unmount, findByText } = localSetup( results )

      fireEvent.press( await findByText( results[ 0 ].line.gurmukhi ) )

      unmount()
    } )
  } )
} )
