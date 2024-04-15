import { render, screen } from '@testing-library/react-native'
import { stripVishraams, toUnicode } from 'gurmukhi-utils'

import * as factories from '~/test/factories'
import { wrapperOptions } from '~/test/utils/wrapper'

import ReaderLines from '.'

describe( '<ReaderLines />', () => {
  it( 'should render all supplied lines in a section', async () => {
    const lines = factories.line.buildList( 10 )

    render( <ReaderLines lines={lines} />, wrapperOptions( { navigationContainer: true } ) )

    // eslint-disable-next-line no-restricted-syntax
    for ( const line of lines ) {
      const gurmukhi = stripVishraams( toUnicode( line.gurmukhi ) )

      // eslint-disable-next-line no-await-in-loop
      expect( await screen.findByText( gurmukhi ) ).toBeTruthy()
    }
  } )
} )
