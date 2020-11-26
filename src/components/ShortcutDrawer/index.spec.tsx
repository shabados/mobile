import React from 'react'
import { fireEvent, render } from '@testing-library/react-native'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import { Text } from 'react-native'

import Screens from '../../lib/screens'

import ShortcutDrawer from '.'

type NavigationWrapper = {
  children: JSX.Element,
}

const NavigationWrapperFactory = ( screen: string ) => {
  const { Navigator, Screen } = createStackNavigator()

  return ( { children }: NavigationWrapper ) => {
    const Success = () => <Text>success</Text>
    const Children = () => children

    return (
      <NavigationContainer>
        <Navigator>
          <Screen name="Default" component={Children} />
          <Screen name={screen} component={Success} />
        </Navigator>
      </NavigationContainer>
    )
  }
}

describe( '<ShortcutDrawer>', () => {
  it( 'should render without crashing', () => {
    const wrapper = NavigationWrapperFactory( 'test' )
    const { unmount } = render( <ShortcutDrawer />, { wrapper } )

    unmount()
  } )

  it.each( [
    [ Screens.Search ],
    [ Screens.Bookmarks ],
    [ Screens.History ],
    [ Screens.Tabs ],
  ] )( 'should navigate to the %s screen, when the corresponding icon is pressed', async ( screen ) => {
    const wrapper = NavigationWrapperFactory( screen )
    const { unmount, getByTestId, findByText } = render( <ShortcutDrawer />, { wrapper } )

    const button = getByTestId( `${screen}-icon` )

    fireEvent.press( button )

    expect( await findByText( 'success' ) ).toBeTruthy()

    unmount()
  } )
} )
