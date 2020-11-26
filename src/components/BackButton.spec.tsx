import { Text } from 'react-native'
import React from 'react'
import { fireEvent, render, waitForElementToBeRemoved } from '@testing-library/react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator, StackNavigationProp } from '@react-navigation/stack'

import BackButton, { BackButtonProps } from './BackButton'

type TestScreenRouteProps = {
  navigation: StackNavigationProp<any, 'OtherScreen'>,
}

const WrappedBackButtonFactory = ( initialRouteName = 'TestScreen' ) => {
  const { Navigator, Screen } = createStackNavigator()

  return ( props: BackButtonProps ) => (
    <NavigationContainer>
      <Navigator initialRouteName={initialRouteName}>
        <Screen name="TestScreen">{() => <BackButton {...props} />}</Screen>
        <Screen name="OtherScreen">{( { navigation }: TestScreenRouteProps ) => <Text onPress={() => navigation.navigate( 'TestScreen' )}>test-screen</Text>}</Screen>
      </Navigator>
    </NavigationContainer>
  )
}

describe( '<BackButton />', () => {
  it( 'should render, when wrapped in a <NavigationContainer />', async () => {
    const WrappedBackButton = WrappedBackButtonFactory()

    const { unmount } = render( <WrappedBackButton /> )

    unmount()
  } )

  it( 'should render a label, when supplied with the label prop', () => {
    const WrappedBackButton = WrappedBackButtonFactory()
    const label = 'Test'

    const { unmount, getByText } = render( <WrappedBackButton label={label} /> )

    expect( getByText( label ) ).toBeTruthy()

    unmount()
  } )
} )

it( 'should navigate to the previous screen, when the label is pressed on a screen part of a navigation history', async () => {
  const WrappedBackButton = WrappedBackButtonFactory( 'OtherScreen' )
  const label = 'Test'
  const {
    unmount,
    getByText,
    findByText,
    queryByText,
  } = render( <WrappedBackButton label={label} /> )

  // Navigate to test screen with back button
  fireEvent.press( getByText( 'test-screen' ) )

  // Press back button
  fireEvent.press( await findByText( label ) )
  await waitForElementToBeRemoved( () => getByText( label ) )

  // Should now be back on original screen
  expect( queryByText( 'test-screen' ) ).toBeTruthy()

  unmount()
} )
