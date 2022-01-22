import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { fireEvent, render } from '@testing-library/react-native'
import { toUnicode } from 'gurmukhi-utils'
import { Suspense } from 'react'
import { Text } from 'react-native'

import * as factories from '../../../test/factories'
import withContexts from '../../components/with-contexts'
import * as lines from '../../services/data/search'
import { LineData, SearchData } from '../../types/data'
import Screens, { AppStackParams } from '../screens'
import { searchScreen } from '.'

type StackParamList = AppStackParams & {
  [Screens.Search]: undefined,
  [Screens.Gurbani]: LineData,
}

const Stack = createStackNavigator<StackParamList>()

const setup = ( results = factories.search.buildList( 5 ) ) => {
  jest.spyOn( lines, 'search' ).mockResolvedValue( results )

  return render( withContexts(
    <Suspense fallback={<Text>Loading</Text>}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen {...searchScreen} />
          <Stack.Screen name={Screens.Gurbani}>
            {( { route: { params: { gurmukhi } } } ) => <Text>{gurmukhi}</Text>}
          </Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    </Suspense>,
  ) )
}

describe( '<SearchScreen />', () => {
  describe( 'on mount', () => {
    it( 'should render a search bar', async () => {
      const { unmount, findByPlaceholderText } = setup()

      expect( await findByPlaceholderText( 'Search' ) ).toBeTruthy()

      unmount()
    } )
  } )

  describe( 'on search', () => {
    it( 'should render results', async () => {
      const results = factories.search.buildList( 5 )
      const { unmount, findByText, findByPlaceholderText } = setup( results )

      fireEvent.changeText( await findByPlaceholderText( 'Search' ), 'hhg' )

      expect( await findByText( toUnicode( results[ 0 ].line.gurmukhi ) ) ).toBeTruthy()

      unmount()
    } )
  } )

  describe( 'on press', () => {
    const localSetup = async ( results: SearchData[] ) => {
      const screen = setup( results )
      const { findByPlaceholderText } = screen

      fireEvent.changeText( await findByPlaceholderText( 'Search' ), 'hhg' )

      return screen
    }

    it( 'should navigate to the Gurbani screen', async () => {
      const results = factories.search.buildList( 5 )
      const { unmount, findByText } = await localSetup( results )

      fireEvent.press( await findByText( toUnicode( results[ 0 ].line.gurmukhi ) ) )

      unmount()
    } )
  } )
} )
