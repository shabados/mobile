import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { fireEvent, render } from '@testing-library/react-native'

import { wrapper } from '../../../test/utils/navigation'
import { RootStackParams } from '../../types/navigation'
import SearchHeader, { SearchHeaderProps } from './SearchHeader'

const setup = ( props?: Partial<SearchHeaderProps> ) => {
  const Stack = createNativeStackNavigator<RootStackParams>()

  return render(
    <Stack.Navigator>
      <Stack.Screen name="Root.Search">
        {( navigatorProps ) => <SearchHeader {...navigatorProps} {...props} />}
      </Stack.Screen>
    </Stack.Navigator>,
    { wrapper }
  )
}

describe( '<SearchHeader />', () => {
  it( 'should render a done button', () => {
    const { queryByText } = setup()

    expect( queryByText( 'Cancel' ) ).toBeTruthy()
  } )

  it( 'should fire onSearchChange when the search bar has changed', () => {
    const onSearchChange = jest.fn()
    const { getByPlaceholderText } = setup( { onSearchChange } )

    fireEvent.changeText( getByPlaceholderText( 'Search' ), 'ggh' )

    expect( onSearchChange ).toHaveBeenCalledWith( 'ggh' )
  } )
} )
