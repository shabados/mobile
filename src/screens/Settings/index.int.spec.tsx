import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { render } from '@testing-library/react-native'
import { Suspense } from 'react'
import { Text } from 'react-native'

import * as factories from '../../../test/factories'
import withContexts from '../../components/with-contexts'
import * as shabads from '../../services/data/shabads'
import { AppStackParams } from '../screens'
import { settingsScreen } from '.'

const Stack = createStackNavigator<AppStackParams>()

const setup = ( shabad = factories.shabad.build() ) => {
  jest.spyOn( shabads, 'getShabad' ).mockResolvedValue( shabad )

  return render( withContexts(
    <Suspense fallback={<Text>Loading</Text>}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen {...settingsScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Suspense>,
  ) )
}

describe( '<SettingsScreen />', () => {
  describe( 'on mount', () => {
    it( 'should render without crashing', async () => {
      setup()
    } )
  } )
} )
