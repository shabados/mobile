import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { fireEvent, render } from '@testing-library/react-native'

import { wrapper } from '../../../test/utils/navigation'
import { RootStackParams } from '../../types/navigation'
import SearchHeader, { SearchHeaderProps } from './SearchHeader'

const setup = ( props?: Partial<SearchHeaderProps> ) => {
  const Stack = createNativeStackNavigator<RootStackParams>()

  return render(
    <Stack.Navigator>
      <Stack.Screen
        name="Root.Search"
      >
        {( navigatorProps ) => <SearchHeader {...navigatorProps} {...props} />}
      </Stack.Screen>
    </Stack.Navigator>,

    { wrapper }
  )
}

describe( '<SearchHeader />', () => {
  it( 'should render a back button', () => {
    const { queryByTestId } = setup()

    expect( queryByTestId( 'cancel-button' ) ).toBeTruthy()
  } )

  it( 'should render a working search bar', () => {
    const onSearchChange = jest.fn()
    const { getByPlaceholderText } = setup( { onSearchChange } )

    fireEvent.changeText( getByPlaceholderText( 'Search' ), 'ggh' )

    expect( onSearchChange ).toHaveBeenCalledWith( 'ggh' )
  } )
} )
