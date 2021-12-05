import { fireEvent, render } from '@testing-library/react-native'

import SearchBar from './SearchBar'

describe( '<SearchBar />', () => {
  it( 'should handle user text input', () => {
    const onEventMock = jest.fn()

    const { getByPlaceholderText } = render( <SearchBar onChangeText={onEventMock} /> )

    fireEvent.changeText( getByPlaceholderText( 'Search' ), 'Test Input' )

    expect( onEventMock ).toHaveBeenCalledWith( 'Test Input' )
  } )

  it( 'should show the search button, given text input', () => {
    const { getByPlaceholderText, queryByTestId } = render( <SearchBar /> )

    expect( queryByTestId( 'clear-search' ) ).toBeFalsy()

    fireEvent.changeText( getByPlaceholderText( 'Search' ), 'Test Input' )

    expect( queryByTestId( 'clear-search' ) ).toBeTruthy()
  } )

  it( 'should clear the search input, given text input and a press of the clear button', () => {
    const onEventMock = jest.fn()

    const {
      getByPlaceholderText,
      queryByTestId,
      getByTestId,
    } = render( <SearchBar onChangeText={onEventMock} /> )

    fireEvent.changeText( getByPlaceholderText( 'Search' ), 'test-input' )
    expect( onEventMock ).toHaveBeenCalledWith( 'test-input' )

    fireEvent.press( getByTestId( 'clear-search' ) )

    expect( queryByTestId( 'clear-search' ) ).toBeFalsy()
    expect( onEventMock ).toHaveBeenCalledWith( 'test-input' )
  } )
} )
