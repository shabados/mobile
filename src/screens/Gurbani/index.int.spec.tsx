import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { render } from '@testing-library/react-native'
import { toUnicode } from 'gurmukhi-utils'
import { atom } from 'jotai'

import * as factories from '../../../test/factories'
import { unmuteConsole } from '../../../test/utils/console'
import { wrapper } from '../../../test/utils/navigation'
import * as shabads from '../../services/data/shabads'
import { settings } from '../../services/settings'
import { ContentType, ShabadData } from '../../types/data'
import { GurbaniStackParams } from '../../types/navigation'
import GurbaniScreen from '.'

type SetupOptions = {
  shabad?: ShabadData,
  readerMode?: boolean,
}

const setup = async ( {
  shabad = factories.shabad.build(),
  readerMode = false,
}: SetupOptions = {} ) => {
  const Stack = createNativeStackNavigator<GurbaniStackParams>()

  settings.readerMode = atom( readerMode )
  jest.spyOn( shabads, 'getShabad' ).mockResolvedValue( shabad )

  return render(
    <Stack.Navigator>
      <Stack.Screen name="Gurbani.View" component={GurbaniScreen} initialParams={{ id: '123', type: ContentType.Shabad }} />
    </Stack.Navigator>,
    { wrapper }
  )
}

describe( '<GurbaniScreen />', () => {
  describe( 'on mount', () => {
    it( 'should render a bottom bar', async () => {
      const { findByPlaceholderText } = await setup()

      expect( await findByPlaceholderText( 'Search' ) ).toBeTruthy()
    } )

    it( 'should load and render a target shabad', async () => {
      const shabad = factories.shabad.build()
      const { findByText, queryByText, debug } = await setup( { shabad } )

      expect( await findByText( toUnicode( shabad.lines[ 0 ].gurmukhi ) ) ).toBeTruthy()
      unmuteConsole( 'log' )
      debug()
      expect( queryByText( shabad.lines[ 0 ].translations[ 0 ].translation ) ).toBeTruthy()
    } )
  } )

  describe( 'given reader mode is enabled', () => {
    it( 'should load and render a target shabad in reader mode', async () => {
      const shabad = factories.shabad.build()
      const { findByText, queryByText } = await setup( { shabad, readerMode: true } )

      expect( await findByText( toUnicode( shabad.lines[ 0 ].gurmukhi ) ) ).toBeTruthy()
      expect( queryByText( shabad.lines[ 0 ].translations[ 0 ].translation ) ).toBeFalsy()
    } )
  } )
} )
