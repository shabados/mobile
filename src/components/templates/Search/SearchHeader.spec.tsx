import { fireEvent, screen } from '@testing-library/react-native'
import { renderRouter } from 'expo-router/testing-library'

import SearchHeader, { SearchHeaderProps } from './SearchHeader'

const setup = ( props?: Partial<SearchHeaderProps> ) => renderRouter(
  { index: () => <SearchHeader {...props} /> },
)

describe( '<SearchHeader />', () => {
  it( 'should render a done button', () => {
    setup()

    expect( screen.queryByText( 'Cancel' ) ).toBeTruthy()
  } )

  it( 'should fire onSearchChange when the search bar has changed', () => {
    const onSearchChange = jest.fn()
    setup( { onSearchChange } )

    fireEvent.changeText( screen.getByPlaceholderText( 'Search' ), 'ggh' )

    expect( onSearchChange ).toHaveBeenCalledWith( 'ggh' )
  } )
} )
