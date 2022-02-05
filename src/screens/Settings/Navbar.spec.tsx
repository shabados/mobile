import { render } from '@testing-library/react-native'

import wrapper from '../../../test/utils/NavigatorContext'
import SettingsNavbar from './Navbar'

describe( '<Navbar />', () => {
  it( 'should render a back button', () => {
    const { getByTestId } = render( <SettingsNavbar />, { wrapper } )

    expect( getByTestId( 'back-button' ) ).toBeTruthy()
  } )
} )
