import { fireEvent, render } from '@testing-library/react-native'

import wrapper from '../../../test/utils/NavigatorContext'
import { HomeTabScreenProps } from '../../types/navigation'
import Navbar from './Navbar'

const getNavigationMock = () => ( {
  navigation: { navigate: jest.fn() },
  route: {},
} as HomeTabScreenProps<'Home.Gurbani'> )

describe( '<Navbar />', () => {
  it( 'should render a Navbar with the Shabad OS text', () => {
    const navigationProps = getNavigationMock()
    const { getByText, unmount } = render( <Navbar {...navigationProps} />, { wrapper } )

    expect( getByText( 'Shabad OS' ) ).toBeTruthy()

    unmount()
  } )

  it( 'should go to the Settings screen when the settings icon is pressed', () => {
    const navigationProps = getNavigationMock()
    const { getByTestId } = render( <Navbar {...navigationProps} />, { wrapper } )

    fireEvent.press( getByTestId( 'navbar-settings' ) )

    expect( navigationProps.navigation.navigate ).toHaveBeenCalledWith( 'Home.Settings' )
  } )
} )
