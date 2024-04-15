import { fireEvent, render, screen } from '@testing-library/react-native'

import CollectionItem from './Item'

describe( '<CollectionItem />', () => {
  it( 'given a press, should fire onPress with details of the collection item', () => {
    const onPress = jest.fn()

    render(
      <CollectionItem title="Test Me" onPress={onPress} />,
    )

    fireEvent.press( screen.getByText( 'Test Me' ) )

    expect( onPress ).toHaveBeenCalled()
  } )
} )
