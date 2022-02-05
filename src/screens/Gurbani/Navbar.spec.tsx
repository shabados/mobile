import { render } from '@testing-library/react-native'

import wrapper from '../../../test/utils/NavigatorContext'
import Navbar from './Navbar'

describe( '<Navbar />', () => {
  it( 'should render a Navbar with the Shabad OS text', () => {
    const { getByText, unmount } = render( <Navbar />, { wrapper } )

    expect( getByText( 'Shabad OS' ) ).toBeTruthy()

    unmount()
  } )
} )
