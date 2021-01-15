import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator, StackNavigationProp } from '@react-navigation/stack'
import { fireEvent, render } from '@testing-library/react-native'
import React, { ReactNode } from 'react'
import { Text } from 'react-native'

import withContexts from '../../components/with-contexts'

import SearchNavbar from './Navbar'

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
    const { queryByTestId, unmount } = render( <SearchNavbar />, { wrapper } )

    expect( queryByTestId( 'back-button' ) ).toBeTruthy()

    unmount()
  } )

  it( 'should render a working search bar', () => {
    const onSearchChange = jest.fn()

    const {
      getByPlaceholderText,
      unmount,
    } = render( <SearchNavbar onSearchChange={onSearchChange} />, { wrapper } )

    fireEvent.changeText( getByPlaceholderText( 'Search' ), 'ggh' )

    expect( onSearchChange ).toHaveBeenCalledWith( 'ggh' )

    unmount()
  } )
} )
