import { render, screen } from '@testing-library/react-native'
import { toUnicode } from 'gurmukhi-utils'

import * as factories from '~/test/factories'

import SearchResults from './Results'

describe( '<SearchResults />', () => {
  it( 'should render search results', async () => {
    const results = factories.search.buildList( 15 )

    render( <SearchResults results={results} /> )

    expect( await screen.findByText( toUnicode( results[ 0 ].line.gurmukhi ) ) ).toBeTruthy()
  } )
} )
