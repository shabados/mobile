import 'react-native'
import React from 'react'
import { render, fireEvent } from '@testing-library/react-native'

import SearchResult from './Result'

describe( '<SearchResult />', () => {
  it( 'given a press, should fire onPress with details of the pressed line', () => {
    const onEventMock = jest.fn()

    const { getByTestId } = render(
      <SearchResult
        line="line"
        source="source"
        page="page"
        translation="translation"
        testID="search-result-test"
        onPress={onEventMock}
      />,
    )

    fireEvent.press( getByTestId( 'search-result-test' ) )
    expect( onEventMock ).toHaveBeenCalled()
  } )
} )
