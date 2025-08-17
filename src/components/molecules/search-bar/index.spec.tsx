import { fireEvent, render, screen } from '@testing-library/react-native'

import SearchBar from '.'

describe( '<SearchBar />', () => {
  it( 'should handle user text input', () => {
    const onEventMock = jest.fn()
    render( <SearchBar onChangeText={onEventMock} /> )

    fireEvent.changeText( screen.getByPlaceholderText( 'Search' ), 'Test Input' )

    expect( onEventMock ).toHaveBeenCalledWith( 'Test Input' )
  } )

  it( 'should show the search button, given text input', async () => {
    render( <SearchBar /> )

    expect( screen.queryByTestId( 'clear-search' ) ).toBeFalsy()

    fireEvent.changeText( screen.getByPlaceholderText( 'Search' ), 'Test Input' )

    expect( await screen.findByTestId( 'clear-search' ) ).toBeTruthy()
  } )

  it( 'should clear the search input, given text input and a press of the clear button', async () => {
    const onEventMock = jest.fn()

    render( <SearchBar onChangeText={onEventMock} /> )

    fireEvent.changeText( screen.getByPlaceholderText( 'Search' ), 'test-input' )
    expect( onEventMock ).toHaveBeenCalledWith( 'test-input' )

    fireEvent.press( await screen.findByTestId( 'clear-search' ) )

    expect( screen.queryByTestId( 'clear-search' ) ).toBeFalsy()
    expect( onEventMock ).toHaveBeenCalledWith( 'test-input' )
  } )
} )
