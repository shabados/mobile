import { render } from '@testing-library/react-native'

import GurmukhiLine from './GurmukhiLine'

describe( '<GurmukhiLine />', () => {
  it( 'should render ASCII Gurmukhi strings as unicode', () => {
    const { queryByText } = render( <GurmukhiLine>rhwau</GurmukhiLine> )

    expect( queryByText( 'ਰਹਾਉ' ) ).toBeTruthy()
  } )

  it( 'should not render vishraams', () => {
    const { queryByText } = render( <GurmukhiLine>rhwau;</GurmukhiLine> )

    expect( queryByText( 'ਰਹਾਉ' ) ).toBeTruthy()
  } )
} )
