import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { render } from '@testing-library/react-native'
import React, { ReactNode } from 'react'

import withContexts from '../../components/with-contexts'

import Navbar from './Navbar'

const { Screen, Navigator } = createStackNavigator()

type WrapperProps = { children: ReactNode }

const wrapper = ( { children }: WrapperProps ) => withContexts(
  <NavigationContainer>
    <Navigator>
      <Screen name="default">{() => children}</Screen>
    </Navigator>
  </NavigationContainer>,
)

describe( '<Navbar />', () => {
  it( 'should render a back button', () => {
    const { queryByTestId, unmount } = render( <Navbar />, { wrapper } )

    expect( queryByTestId( 'back-button' ) ).toBeTruthy()

    unmount()
  } )

  it( 'should render a add button', () => {
    const { queryByTestId, unmount } = render( <Navbar />, { wrapper } )

    expect( queryByTestId( 'add-button' ) ).toBeTruthy()

    unmount()
  } )

  it( 'should render a Navbar with the Bookmarks Collection text', () => {
    const { getByText, unmount } = render( <Navbar />, { wrapper } )

    expect( getByText( 'Bookmarks Collection' ) ).toBeTruthy()

    unmount()
  } )
} )
