import { render, screen } from '@testing-library/react-native'

import GurmukhiLine from '.'

describe( '<GurmukhiLine />', () => {
  it( 'should render ASCII Gurmukhi strings as unicode', () => {
    render( <GurmukhiLine>rhwau</GurmukhiLine> )

    expect( screen.queryByText( 'ਰਹਾਉ' ) ).toBeTruthy()
  } )

  it( 'should not render vishraams', () => {
    render( <GurmukhiLine>rhwau;</GurmukhiLine> )

    expect( screen.queryByText( 'ਰਹਾਉ' ) ).toBeTruthy()
  } )
} )
