import { fireEvent, render } from '@testing-library/react-native'
import { stripVishraams, toUnicode } from 'gurmukhi-utils'

import * as factories from '../../../../test/factories'
import DefaultLines from '.'

describe( '<DefaultLines />', () => {
  it( 'should render all supplied lines', async () => {
    const lines = factories.line.buildList( 15 )

    const { findByText, queryByText, getByText } = render( <DefaultLines lines={lines} /> )

    const container = getByText( toUnicode( lines[ 0 ].gurmukhi ) ).parent!

    await lines
      .map( ( { gurmukhi } ) => stripVishraams( toUnicode( gurmukhi ) ) )
      .reduce( async ( promise, gurmukhi ) => {
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
