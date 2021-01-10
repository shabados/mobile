import React from 'react'
import { render, fireEvent } from '@testing-library/react-native'

import SearchResult from './Result'

describe( '<SearchResult />', () => {
  it( 'should render the full page number', () => {
    const { getByText } = render(
      <SearchResult
        line="line"
        source="source"
        page={1}
        translation="translation"
      />,
    )

    expect( getByText( 'AMg 1' ) ).toBeTruthy()
  } )

  it( 'given a press, should fire onPress with details of the pressed line', () => {
    const onPress = jest.fn()

    const { getByText } = render(
      <SearchResult
        line="line"
        source="source"
        page={1}
        translation="translation"
        onPress={onPress}
      />,
    )

    fireEvent.press( getByText( 'translation' ) )
    expect( onPress ).toHaveBeenCalledWith( {
      line: 'line',
      source: 'source',
      page: 1,
      translation: 'translation',
    } )
  } )
} )
