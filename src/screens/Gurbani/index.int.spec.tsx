import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { render } from '@testing-library/react-native'
import { toUnicode } from 'gurmukhi-utils'
import { Suspense } from 'react'
import { Text } from 'react-native'

import * as factories from '../../../test/factories'
import { wrapper } from '../../../test/utils/navigation'
import * as shabads from '../../services/data/shabads'
import { ContentType } from '../../types/data'
import { GurbaniStackParams } from '../../types/navigation'
import GurbaniScreen from '.'

const setup = ( shabad = factories.shabad.build() ) => {
  const Stack = createNativeStackNavigator<GurbaniStackParams>()

  jest.spyOn( shabads, 'getShabad' ).mockResolvedValue( shabad )

  return render(
    <Suspense fallback={<Text>Loading</Text>}>
      <Stack.Navigator>
        <Stack.Screen name="Gurbani.View" component={GurbaniScreen} initialParams={{ id: '123', type: ContentType.Shabad }} />
      </Stack.Navigator>
    </Suspense>,
    { wrapper }
  )
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
