import { render } from '@testing-library/react-native'
import React from 'react'

import wrapper from '../../lib/NavigatorContext'

import Navbar from './Navbar'

describe( '<Navbar />', () => {
  it( 'should render a back button', () => {
    const { queryByTestId, unmount } = render( <Navbar />, { wrapper } )

    expect( queryByTestId( 'back-button' ) ).toBeTruthy()

    unmount()
  } )

  it( 'should render a add button', () => {
    const { queryByTestId, unmount } = render( <Navbar />, { wrapper } )

    expect( queryByTestId( 'add-button' ) ).toBeTruthy()

    unmount()
  } )

  it( 'should render a Navbar with the Bookmarks Collection text', () => {
    const { getByText, unmount } = render( <Navbar />, { wrapper } )

    expect( getByText( 'Bookmarks Collection' ) ).toBeTruthy()

    unmount()
  } )
} )
