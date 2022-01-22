import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { render } from '@testing-library/react-native'
import { toUnicode } from 'gurmukhi-utils'
import { Suspense } from 'react'
import { Text } from 'react-native'

import * as factories from '../../../test/factories'
import withContexts from '../../components/with-contexts'
import * as shabads from '../../services/data/shabads'
import { AppStackParams } from '../screens'
import { gurbaniScreen } from '.'

const Stack = createStackNavigator<AppStackParams>()

const setup = ( shabad = factories.shabad.build() ) => {
  jest.spyOn( shabads, 'getShabad' ).mockResolvedValue( shabad )

  return render( withContexts(
    <Suspense fallback={<Text>Loading</Text>}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen {...gurbaniScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Suspense>,
  ) )
}

describe( '<GurbaniScreen />', () => {
  describe( 'on mount', () => {
    it( 'should render a bottom bar', async () => {
      const { findByPlaceholderText } = setup()

      expect( await findByPlaceholderText( 'Search' ) ).toBeTruthy()
    } )

    it( 'should load and render a target shabad', async () => {
      const shabad = factories.shabad.build()
      const { findByText } = setup( shabad )

      expect( await findByText( toUnicode( shabad.lines[ 0 ].gurmukhi ) ) ).toBeTruthy()
    } )
  } )
} )
