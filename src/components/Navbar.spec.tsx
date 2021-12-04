import { render } from '@testing-library/react-native'
import { Text } from 'react-native'

import Navbar from './Navbar'

describe( '<Navbar />', () => {
  it( 'should render a Navbar with a main element', () => {
    const { getByText } = render( <Navbar main={<Text>Hello world</Text>} /> )

    expect( getByText( 'Hello world' ) ).toBeTruthy()
  } )

  it( 'should render a Navbar with a left and right element', () => {
    const { getByText } = render( <Navbar
      left={<Text>left</Text>}
      right={<Text>right</Text>}
    /> )

    expect( getByText( 'left' ) ).toBeTruthy()
    expect( getByText( 'right' ) ).toBeTruthy()
  } )
} )
