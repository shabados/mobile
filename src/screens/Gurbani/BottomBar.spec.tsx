import React, { ReactNode } from 'react'
import { Text } from 'react-native'
import { fireEvent, render } from '@testing-library/react-native'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'

import Screens from '../screens'

import BottomBar from './BottomBar'

const Stack = createStackNavigator()

type WrapperProps = { children: ReactNode }
const wrapper = ( { children }: WrapperProps ) => (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="default">{() => children}</Stack.Screen>
      <Stack.Screen name={Screens.Bookmarks}>{() => <Text>bookmarks</Text>}</Stack.Screen>
      <Stack.Screen name={Screens.Search}>{() => <Text>search</Text>}</Stack.Screen>
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

  it( 'given a click on the bookmarks button, should go to the bookmarks screen', () => {
    const { unmount, getByText, getByTestId } = render( <BottomBar />, { wrapper } )

    fireEvent.press( getByTestId( 'bookmarks-icon' ) )

    expect( getByText( 'bookmarks' ) ).toBeTruthy()

    unmount()
  } )
} )
