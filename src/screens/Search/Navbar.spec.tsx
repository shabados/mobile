import React from 'react'
import { fireEvent, render } from '@testing-library/react-native'

import wrapper from '../../../test/utils/NavigatorContext'

import SearchNavbar from './Navbar'

describe( '<Navbar />', () => {
  it( 'should render a back button', () => {
    const { queryByTestId, unmount } = render( <SearchNavbar />, { wrapper } )

    expect( queryByTestId( 'back-button' ) ).toBeTruthy()

    unmount()
  } )

  it( 'should render a working search bar', () => {
    const onSearchChange = jest.fn()

    const {
      getByPlaceholderText,
      unmount,
    } = render( <SearchNavbar onSearchChange={onSearchChange} />, { wrapper } )

    fireEvent.changeText( getByPlaceholderText( 'Search' ), 'ggh' )

    expect( onSearchChange ).toHaveBeenCalledWith( 'ggh' )

    unmount()
  } )
} )
