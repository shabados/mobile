import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { fireEvent, render } from '@testing-library/react-native'
import { Text } from 'react-native'

import { wrapper } from '../../../test/utils/navigation'
import { RootStackParams } from '../../types/navigation'
import BottomBar from './BottomBar'

const setup = () => {
  const Stack = createNativeStackNavigator<RootStackParams>()

  return render(
    <Stack.Navigator>
      <Stack.Screen name="Root.Home">{() => <BottomBar />}</Stack.Screen>
      <Stack.Screen name="Root.Collections">{() => <Text>collections</Text>}</Stack.Screen>
      <Stack.Screen name="Root.Search">{() => <Text>search</Text>}</Stack.Screen>
    </Stack.Navigator>,
    { wrapper }
  )
}

describe( '<BottomBar />', () => {
  it( 'given a click on the search bar, should go to the search screen', () => {
    const { getByPlaceholderText, getByText } = setup()

    fireEvent.press( getByPlaceholderText( 'Search' ) )

    expect( getByText( 'search' ) ).toBeTruthy()
  } )

  it( 'given a click on the collections button, should go to the collections screen', () => {
    const { getByText, getByTestId } = setup()

    fireEvent.press( getByTestId( 'collections-icon' ) )

    expect( getByText( 'collections' ) ).toBeTruthy()
  } )
} )
