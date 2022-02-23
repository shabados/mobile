import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { fireEvent, render } from '@testing-library/react-native'
import { toUnicode } from 'gurmukhi-utils'

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
    </Stack.Navigator>,
    { wrapper }
  )
}

describe( '<SearchScreen />', () => {
  describe( 'on mount', () => {
    it( 'should render a search bar', () => {
      const { queryByPlaceholderText } = setup()

      expect( queryByPlaceholderText( 'Search' ) ).toBeTruthy()
    } )
  } )

  describe( 'on search', () => {
    it( 'should render results', async () => {
      const results = factories.search.buildList( 5 )
      const { findByText, getByPlaceholderText } = setup( { results } )

      fireEvent.changeText( getByPlaceholderText( 'Search' ), 'hhg' )

      expect( await findByText( toUnicode( results[ 0 ].line.gurmukhi ) ) ).toBeTruthy()
    } )
  } )

  describe( 'on press', () => {
    it( 'should navigate to the Gurbani screen', async () => {
      const navigation = getNavigationMock()
      const results = factories.search.buildList( 1 )
      const { getByPlaceholderText, findByText } = setup( { results, navigation } )

      fireEvent.changeText( getByPlaceholderText( 'Search' ), 'hhg' )
      fireEvent.press( await findByText( toUnicode( results[ 0 ].line.gurmukhi ) ) )

      expect( navigation.navigate ).toHaveBeenCalled()
    } )
  } )
} )
