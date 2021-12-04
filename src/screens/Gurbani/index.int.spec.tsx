import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { render } from '@testing-library/react-native'

import * as factories from '../../../test/factories'
import withContexts from '../../components/with-contexts'
import * as shabads from '../../data/shabads'
import { AppStackParams } from '../screens'

import { gurbaniScreen } from '.'

const Stack = createStackNavigator<AppStackParams>()

const setup = ( shabad = factories.shabad.build() ) => {
  jest.spyOn( shabads, 'getShabad' ).mockResolvedValue( shabad )

  return render( withContexts(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen {...gurbaniScreen} />
      </Stack.Navigator>
    </NavigationContainer>,
  ) )
}

describe( '<GurbaniScreen />', () => {
  describe( 'on mount', () => {
    it( 'should render a bottom bar', () => {
      const { getByPlaceholderText } = setup()

      expect( getByPlaceholderText( 'Search' ) ).toBeTruthy()
    } )

    it( 'should load and render a target shabad', async () => {
      const shabad = factories.shabad.build()
      const { findByText } = setup( shabad )

      expect( await findByText( shabad.lines[ 0 ].gurmukhi ) ).toBeTruthy()
    } )
  } )
} )
