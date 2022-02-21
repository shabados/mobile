import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { fireEvent, render } from '@testing-library/react-native'
import { toUnicode } from 'gurmukhi-utils'
import { Suspense } from 'react'
import { Text } from 'react-native'

import * as factories from '../../../test/factories'
import { getNavigationMock, wrapper } from '../../../test/utils/navigation'
import * as lines from '../../services/data/search'
import { SearchData } from '../../types/data'
import { RootStackParams } from '../../types/navigation'
import SearchScreen, { SearchScreenProps } from '.'

type SetupOptions = {
  results?: SearchData[],
  navigation?: any,
  route?: SearchScreenProps['route'],
}

const setup = ( {
  results = factories.search.buildList( 5 ),
  navigation,
  ...props
}: SetupOptions = {} ) => {
  const Stack = createNativeStackNavigator<RootStackParams>()
  jest.spyOn( lines, 'search' ).mockResolvedValue( results )

  return render(
    <Suspense fallback={<Text>Loading</Text>}>
      <Stack.Navigator>
        <Stack.Screen name="Root.Search">
          {( screenProps ) => (
            <SearchScreen
              navigation={{ ...screenProps.navigation, ...getNavigationMock(), ...navigation }}
              route={{ key: '', name: 'Root.Search' }}
              {...props}
            />
          )}
        </Stack.Screen>
      </Stack.Navigator>
    </Suspense>,
    { wrapper }
  )
}

describe( '<SearchScreen />', () => {
  describe( 'on mount', () => {
    it( 'should render a search bar', async () => {
      const { findByPlaceholderText, findByText } = setup()

      expect( await findByText( 'Test' ) ).toBeTruthy()
      expect( await findByPlaceholderText( 'Search' ) ).toBeTruthy()
    } )
  } )

  describe( 'on search', () => {
    it( 'should render results', async () => {
      const results = factories.search.buildList( 5 )
      const { findByText, findByPlaceholderText } = setup( { results } )

      fireEvent.changeText( await findByPlaceholderText( 'Search' ), 'hhg' )

      expect( await findByText( toUnicode( results[ 0 ].line.gurmukhi ) ) ).toBeTruthy()
    } )
  } )

  describe( 'on press', () => {
    it( 'should navigate to the Gurbani screen', async () => {
      const navigation = getNavigationMock()
      const results = factories.search.buildList( 1 )
      const { findByPlaceholderText, findByText } = setup( { results, navigation } )

      fireEvent.changeText( await findByPlaceholderText( 'Search' ), 'hhg' )
      fireEvent.press( await findByText( toUnicode( results[ 0 ].line.gurmukhi ) ) )

      expect( navigation.navigate ).toHaveBeenCalled()
    } )
  } )
} )
