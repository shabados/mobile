import { fireEvent, screen } from '@testing-library/react-native'
import { renderRouter } from 'expo-router/testing-library'
import { Text } from 'react-native'

import BottomBar from './BottomBar'

const setup = () => renderRouter( {
  search: () => <Text>search</Text>,
  collections: () => <Text>collections</Text>,
  index: () => <BottomBar />,
} )

describe( '<BottomBar />', () => {
  it( 'given a click on the search bar, should go to the search screen', () => {
    setup()

    fireEvent.press( screen.getByPlaceholderText( 'Search' ) )

    expect( screen.getByText( 'search' ) ).toBeTruthy()
  } )

  it( 'given a click on the collections button, should go to the collections screen', () => {
    setup()

    fireEvent.press( screen.getByTestId( 'collections-icon' ) )

    expect( screen.getByText( 'collections' ) ).toBeTruthy()
  } )
} )
