import React from 'react'
import { render, fireEvent } from '@testing-library/react-native'

import Wrapper, { WrapperProps } from '../../lib/NavigatorContext'
import defaultFolderData from '../../defaults/collections'
import Screens from '../../lib/screens'

import BookmarksList from './List'

const wrapper = ( { children }: WrapperProps ) => (
  <Wrapper name={Screens.Bookmarks} initialParams={{ folderData: defaultFolderData }}>
    {children}
  </Wrapper>
)

describe( '<BookmarksList />', () => {
  it( 'should render list of bookmark items', async () => {
    const { queryByText, unmount } = render( <BookmarksList />, { wrapper } )

    defaultFolderData.forEach( ( { name } ) => {
      expect( queryByText( name ) ).toBeTruthy()
    } )

    unmount()
  } )

  it( 'should open a folder', async () => {
    const { queryByText, unmount } = render( <BookmarksList />, { wrapper } )

    const folder = queryByText( defaultFolderData[ 0 ].name )
    expect( folder ).toBeTruthy()
    fireEvent.press( folder! )

    defaultFolderData[ 0 ].bookmarks.forEach( ( { name } ) => {
      expect( queryByText( name ) ).toBeTruthy()
    } )

    unmount()
  } )
} )
