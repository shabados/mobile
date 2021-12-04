import { render } from '@testing-library/react-native'

import Navbar from './Navbar'

describe( '<Navbar />', () => {
  it( 'should render a Navbar with the Shabad OS text', () => {
    const { getByText, unmount } = render( <Navbar /> )

    expect( getByText( 'Shabad OS' ) ).toBeTruthy()

    unmount()
  } )
} )
