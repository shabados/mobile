import 'react-native'
import React from 'react'
import { render, fireEvent } from '@testing-library/react-native'

import SearchBar from './Search'

describe( '<Search />', () => {
  it( 'should handle user text input', () => {
    const onEventMock = jest.fn()

    const { getByPlaceholderText } = render(
      <SearchBar onChangeText={onEventMock} />,
    )

    fireEvent.changeText( getByPlaceholderText( 'Search' ), 'Test Input' )

    expect( onEventMock ).toHaveBeenCalledWith( 'Test Input' )
  } )

  it( 'should change language, when the language button is pressed', async () => {
    const {
      getByText,
      getByPlaceholderText,
      findByPlaceholderText,
    } = render( <SearchBar onChangeText={jest.fn()} /> )

    expect( getByPlaceholderText( 'Search' ) ).toBeTruthy()
    fireEvent.press( getByText( 'PA' ) )

    expect( await findByPlaceholderText( 'ਖੌਜ' ) ).toBeTruthy()
  } )
} )
