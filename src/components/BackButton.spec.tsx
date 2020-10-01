import 'react-native'
import React from 'react'
import { render } from 'react-native-testing-library'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import BackButton from './BackButton'

const { Navigator, Screen } = createStackNavigator()

describe( 'Search', () => {
  const component = (
    <NavigationContainer>
      <Navigator>
        <Screen name="TestScreen">{() => <BackButton />}</Screen>
      </Navigator>
    </NavigationContainer>
  )

  it( 'Render without crashing', () => {
    expect( render( component ).toJSON() ).toMatchSnapshot()
  } )
} )
