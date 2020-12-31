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

    const eventData = {
      nativeEvent: {
        contentOffset: {
          y: 500,
        },
        // Dimensions of the scrollable content
        contentSize: {
          height: 500,
          width: 100,
        },
        // Dimensions of the device
        layoutMeasurement: {
          height: 100,
          width: 100,
        },
      },
    }

    fireEvent.scroll( getByTestId( 'search-results' ), eventData )
    expect( onEndReached ).toHaveBeenCalled()
  } )
} )
