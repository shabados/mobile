import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { fireEvent, render } from '@testing-library/react-native'
import { ReactNode } from 'react'
import { Text } from 'react-native'

import { RootStackParams } from '../../types/navigation'
import BottomBar from './BottomBar'

const Stack = createStackNavigator<RootStackParams>()

type WrapperProps = { children: ReactNode }
const wrapper = ( { children }: WrapperProps ) => (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Root.Home">{() => children}</Stack.Screen>
      <Stack.Screen name="Root.Collections">{() => <Text>collections</Text>}</Stack.Screen>
      <Stack.Screen name="Root.Search">{() => <Text>search</Text>}</Stack.Screen>
    </Stack.Navigator>
  </NavigationContainer>
)

describe( '<BottomBar />', () => {
  it( 'given a click on the search bar, should go to the search screen', () => {
    const { unmount, getByPlaceholderText, getByText } = render( <BottomBar />, { wrapper } )

    fireEvent.press( getByPlaceholderText( 'Search' ) )

    expect( getByText( 'search' ) ).toBeTruthy()

    unmount()
  } )

  it( 'given a click on the collections button, should go to the collections screen', () => {
    const { unmount, getByText, getByTestId } = render( <BottomBar />, { wrapper } )

    fireEvent.press( getByTestId( 'collections-icon' ) )

    expect( getByText( 'collections' ) ).toBeTruthy()

    unmount()
  } )
} )
