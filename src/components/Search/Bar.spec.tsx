import 'react-native'
import React from 'react'
import { render, fireEvent } from '@testing-library/react-native'

import SearchBar from './Bar'

describe( '<Search />', () => {
  it( 'should handle user text input', () => {
    const onEventMock = jest.fn()

    const { getByPlaceholderText } = render(
      <SearchBar onChangeText={onEventMock} />,
    )

    fireEvent.changeText( getByPlaceholderText( 'Search' ), 'Test Input' )

    expect( onEventMock ).toHaveBeenCalledWith( 'Test Input' )
  } )

  it( 'should change language to Punjabi, when the language button is pressed', async () => {
    const {
      getByText,
      getByPlaceholderText,
      findByPlaceholderText,
    } = render( <SearchBar onChangeText={jest.fn()} /> )

    expect( getByPlaceholderText( 'Search' ) ).toBeTruthy()
    fireEvent.press( getByText( 'PA' ) )

    expect( await findByPlaceholderText( 'ਖੌਜ' ) ).toBeTruthy()
  } )

  it( 'should change language to English, when the EN language button is pressed', async () => {
    const {
      getByText,
      getByPlaceholderText,
      findByPlaceholderText,
    } = render( <SearchBar onChangeText={jest.fn()} /> )

    expect( getByPlaceholderText( 'ਖੌਜ' ) ).toBeTruthy()
    fireEvent.press( getByText( 'EN' ) )

    expect( await findByPlaceholderText( 'Search' ) ).toBeTruthy()
  } )
} )
