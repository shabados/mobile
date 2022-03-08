import { render } from '@testing-library/react-native'
import { stripVishraams, toUnicode } from 'gurmukhi-utils'

import * as factories from '../../../../test/factories'
import { wrapper } from '../../../../test/utils/navigation'
import ReaderLines from '.'

describe( '<ReaderLines />', () => {
  it( 'should render all supplied lines in a section', async () => {
    const lines = factories.line.buildList( 10 )

    const { findByText } = render( <ReaderLines id="" lines={lines} />, { wrapper } )

    // eslint-disable-next-line no-restricted-syntax
    for ( const line of lines ) {
      const gurmukhi = stripVishraams( toUnicode( line.gurmukhi ) )

      // eslint-disable-next-line no-await-in-loop
      expect( await findByText( gurmukhi ) ).toBeTruthy()
    }
  } )
} )
