import React from 'react'
import { render, fireEvent } from '@testing-library/react-native'

import Result from './Result'

describe( '<SearchResult />', () => {
  it( 'should render the full page number', () => {
    const { getByText } = render(
      <Result
        gurmukhi="line"
        source="source"
        page="AMg 1"
        translation="translation"
      />,
    )

    expect( getByText( 'ਅੰਗ ੧' ) ).toBeTruthy()
  } )

  it( 'should render a last viewed at date, if supplied', () => {
    const lastViewedAt = new Date( '21 September 2020' ).toJSON()

    const { getByText } = render(
      <Result
        gurmukhi="line"
        source="source"
        page="AMg 1"
        translation="translation"
        lastViewedAt={lastViewedAt}
      />,
    )

    expect( getByText( 'Sep 21' ) ).toBeTruthy()
  } )

  it( 'given a press, should fire onPress', () => {
    const onPress = jest.fn()

    const { getByText } = render(
      <Result
        gurmukhi="line"
        source="source"
        page="AMg 1"
        translation="translation"
        onPress={onPress}
      />,
    )

    fireEvent.press( getByText( 'translation' ) )
    expect( onPress ).toHaveBeenCalled()
  } )
} )
