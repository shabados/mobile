import React from 'react'
import { render, fireEvent } from '@testing-library/react-native'

import BookmarksList from './List'

describe( '<BookmarksList />', () => {
  it( 'should render list of bookmark items', async () => {
    const results = Array.from(
      { length: 15 },
      ( _, index ) => ( { name: index.toString() } ),
    )
    const onPressMock = jest.fn()

    const { getByText, queryByText, findByText } = render(
      <BookmarksList data={results} onItemPress={onPressMock} />,
    )

    const container = getByText( '0' ).parent!

    await results.reduce( async ( promise, { name } ) => {
      await promise

      let resultElement = queryByText( name )

      // Scroll if we can't see the line
      if ( !resultElement ) {
        fireEvent.scroll( container, {
          nativeEvent: {
            contentOffset: { y: 500 },
            contentSize: { height: 500, width: 100 },
            layoutMeasurement: { height: 100, width: 100 },
          },
        } )

        resultElement = await findByText( name )
      }

      expect( resultElement ).toBeTruthy()
    }, Promise.resolve() )
  } )
} )
