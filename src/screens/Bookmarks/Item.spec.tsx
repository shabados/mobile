import React from 'react'
import { render, fireEvent } from '@testing-library/react-native'

import BookmarkItem from './Item'

describe( '<BookmarkItem />', () => {
  it( 'given a press, should fire onPress with details of the bookmark item', () => {
    const onPress = jest.fn()

    const { getByText } = render(
      <BookmarkItem title="Test Me" onPress={onPress} />,
    )

    fireEvent.press( getByText( 'Test Me' ) )

    expect( onPress ).toHaveBeenCalled()
  } )
} )
