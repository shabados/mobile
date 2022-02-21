import { fireEvent, render } from '@testing-library/react-native'

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
    const { getByText } = setup( { page: 'AMg 1' } )

    expect( getByText( 'ਅੰਗ ੧' ) ).toBeTruthy()
  } )

  it( 'given a press, should fire onPress', () => {
    const onPress = jest.fn()
    const { getByText } = setup( { onPress } )

    fireEvent.press( getByText( 'translation' ) )

    expect( onPress ).toHaveBeenCalled()
  } )
} )
