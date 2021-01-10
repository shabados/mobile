import React from 'react'
import { render, fireEvent } from '@testing-library/react-native'

import SearchResults from './Results'

describe( '<SearchResults />', () => {
  it( 'should render all search results', async () => {
    const results = Array.from(
      { length: 15 },
      ( _, index ) => ( { key: index.toString(), source: 'source', page: 1, line: `line-${index}`, translation: `translation-${index}` } ),
    )

    const { getByText, queryByText, findByText } = render( <SearchResults data={results} /> )

    const container = getByText( 'line-0' ).parent!

    await results.reduce( async ( promise, { line } ) => {
      await promise

      let resultElement = queryByText( line )

      // Scroll if we can't see the line
      if ( !resultElement ) {
        fireEvent.scroll( container, {
          nativeEvent: {
            contentOffset: { y: 500 },
            contentSize: { height: 500, width: 100 },
            layoutMeasurement: { height: 100, width: 100 },
          },
        } )

        resultElement = await findByText( line )
      }

      expect( resultElement ).toBeTruthy()
    }, Promise.resolve() )
  } )
} )
