import React from 'react'
import { fireEvent, render } from '@testing-library/react-native'

import factories from '../../../test/factories'

import Lines from './Lines'

describe( '<Lines />', () => {
  it( 'should render all supplied lines', async () => {
    const lines = factories.line.buildList( 15 )

    const { findByText, queryByText, getByText } = render( <Lines lines={lines} /> )

    const container = getByText( 'line-0' ).parent!

    await lines.reduce( async ( promise, { gurmukhi } ) => {
      await promise

      let lineElement = queryByText( gurmukhi )

      // Scroll if we can't see the line
      if ( !lineElement ) {
        fireEvent.scroll( container, {
          nativeEvent: {
            contentOffset: { y: 500 },
            contentSize: { height: 500, width: 100 },
            layoutMeasurement: { height: 100, width: 100 },
          },
        } )

        lineElement = await findByText( gurmukhi )
      }

      expect( lineElement ).toBeTruthy()
    }, Promise.resolve() )
  } )
} )
