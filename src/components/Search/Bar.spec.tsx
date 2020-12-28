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
} )
