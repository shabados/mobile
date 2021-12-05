import { fireEvent, render } from '@testing-library/react-native'

import CollectionItem from './Item'

describe( '<CollectionItem />', () => {
  it( 'given a press, should fire onPress with details of the collection item', () => {
    const onPress = jest.fn()

    const { getByText } = render(
      <CollectionItem title="Test Me" onPress={onPress} />,
    )

    fireEvent.press( getByText( 'Test Me' ) )

    expect( onPress ).toHaveBeenCalled()
  } )
} )
