import React from 'react'
import { render, fireEvent } from '@testing-library/react-native'

import factories from '../../../test/factories'

import SearchResults from './Results'

describe( '<SearchResults />', () => {
  it( 'should render all search results', async () => {
    const results = factories.line.buildList( 15 )

    const { getByText, queryByText, findByText } = render( <SearchResults results={results} /> )

    const container = getByText( results[ 0 ].gurmukhi ).parent!

    await results.reduce( async ( promise, { gurmukhi } ) => {
      await promise

      let resultElement = queryByText( gurmukhi )

      // Scroll if we can't see the line
      if ( !resultElement ) {
        fireEvent.scroll( container, {
          nativeEvent: {
            contentOffset: { y: 500 },
            contentSize: { height: 500, width: 100 },
            layoutMeasurement: { height: 100, width: 100 },
          },
        } )

        resultElement = await findByText( gurmukhi )
      }

      expect( resultElement ).toBeTruthy()
    }, Promise.resolve() )
  } )
} )
