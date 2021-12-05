import { fireEvent, render } from '@testing-library/react-native'

import * as factories from '../../../test/factories'
import wrapper from '../../../test/utils/NavigatorContext'
import SearchResults from './Results'

describe( '<SearchResults />', () => {
  it( 'should render all search results', async () => {
    const results = factories.search.buildList( 15 )

    const {
      getByText,
      queryByText,
      findByText,
      unmount,
    } = render( <SearchResults results={results} />, { wrapper } )

    const container = getByText( results[ 0 ].line.gurmukhi ).parent!

    await results.reduce( async ( promise, { line: { gurmukhi } } ) => {
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

    unmount()
  } )
} )
