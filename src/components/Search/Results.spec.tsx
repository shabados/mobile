import 'react-native'
import React from 'react'
import { render, fireEvent } from '@testing-library/react-native'

import mockData from '../../mock-data/results'

import SearchResults from './Results'

describe( '<SearchResults />', () => {
  it( 'should scroll down to end of the list', () => {
    const onEndReached = jest.fn()

    const { getByTestId } = render(
      <SearchResults data={mockData} testID="search-results" onEndReached={onEndReached} />,
    )

    fireEvent.scroll( getByTestId( 'search-results' ), {
      nativeEvent: {
        contentOffset: { y: 500 },
        contentSize: { height: 500, width: 100 },
        layoutMeasurement: { height: 100, width: 100 },
      },
    } )

    expect( onEndReached ).toHaveBeenCalled()
  } )
} )
