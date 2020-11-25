import 'react-native'
import React from 'react'
import { render, fireEvent } from '@testing-library/react-native'

import SearchBar from './Search'

describe( 'Search', () => {
  it( 'Handle user text input', () => {
    const onEventMock = jest.fn()

    const { getByPlaceholderText } = render(
      <SearchBar onChangeText={onEventMock} />,
    )

    fireEvent.changeText( getByPlaceholderText( 'Koj' ), 'Test Input' )

    expect( onEventMock ).toHaveBeenCalledWith( 'Test Input' )
  } )
} )
