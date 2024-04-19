import { fireEvent, render, screen } from '@testing-library/react-native'

import Result, { ResultProps } from './Result'

const setup = ( props: Partial<ResultProps> ) => render(
  <Result
    gurmukhi="line"
    source="source"
    page="AMg 3"
    translation="translation"
    {...props}
  />,
)

describe( '<SearchResult />', () => {
  it( 'should render the full page number', () => {
    setup( { page: 'AMg 1' } )

    expect( screen.getByText( 'ਅੰਗ ੧' ) ).toBeTruthy()
  } )

  it( 'given a press, should fire onPress', () => {
    const onPress = jest.fn()
    setup( { onPress } )

    fireEvent.press( screen.getByText( 'translation' ) )

    expect( onPress ).toHaveBeenCalled()
  } )
} )
