import 'react-native'
import React from 'react'
import { render, fireEvent } from 'react-native-testing-library'

import SearchBar from './Search'

describe( 'Search', () => {
  it( 'Handle user text input', () => {
    const onEventMock = jest.fn()

    const { getByPlaceholder } = render(
      <SearchBar handleTextChanges={onEventMock} />,
    )

    fireEvent( getByPlaceholder( 'Koj' ), 'onChangeText', 'Test Input' )
    expect( onEventMock ).toHaveBeenCalledWith( 'Test Input' )
  } )
} )
