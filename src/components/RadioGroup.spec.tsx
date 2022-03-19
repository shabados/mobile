import { fireEvent, render, within } from '@testing-library/react-native'
import { ViewStyle } from 'react-native'
import { ReactTestInstance } from 'react-test-renderer'

import Colors from '../themes/colors'
import RadioGroup, { RadioGroupProps } from './RadioGroup'

const OPTIONS: [string, string][] = [
  [ 'item 1', 'value 1' ],
  [ 'item 2', 'value 2' ],
  [ 'item 3', 'value 3' ],
]

const setup = ( {
  onChange = jest.fn(),
  initialValue = OPTIONS[ 0 ][ 1 ],
  options = OPTIONS,
}: Partial<RadioGroupProps<string>> = {} ) => render(
  <RadioGroup
    options={options}
    initialValue={initialValue}
    onChange={onChange}
  />
)

const isOptionActive = ( nameElement: ReactTestInstance ) => ( within( nameElement.parent!.parent! )
  .getByTestId( 'radio-bullet' )
  .props
  .style as ViewStyle[] )
  .some( ( { backgroundColor } ) => backgroundColor === Colors.Active )

describe( '<RadioGroup />', () => {
  describe( 'initially', () => {
    it( 'should render the names of all items', () => {
      const { queryByText } = setup()

      OPTIONS.forEach( ( [ name ] ) => expect( queryByText( name ) ).toBeTruthy() )
    } )

    it( 'should set the current item to initialValue', () => {
      const activeOption = OPTIONS[ 1 ]

      const { getByText } = setup( { initialValue: activeOption[ 1 ] } )

      expect( isOptionActive( getByText( OPTIONS[ 0 ][ 0 ] ) ) ).toBeFalsy()
      expect( isOptionActive( getByText( OPTIONS[ 2 ][ 0 ] ) ) ).toBeFalsy()
      expect( isOptionActive( getByText( activeOption[ 0 ] ) ) ).toBeTruthy()
    } )
  } )

  describe( 'given an item is pressed', () => {
    it( 'should fire onChange with the pressed value and name', () => {
      const targetOption = OPTIONS[ 2 ]
      const onChange = jest.fn()
      const { getByText } = setup( { onChange } )

      fireEvent.press( getByText( targetOption[ 0 ] ) )

      expect( onChange ).toHaveBeenCalledWith( targetOption[ 1 ], targetOption[ 0 ] )
    } )

    it( 'should change the current item to the pressed item', () => {
      const targetOption = OPTIONS[ 2 ]
      const { getByText } = setup()

      fireEvent.press( getByText( targetOption[ 0 ] ) )

      expect( isOptionActive( getByText( targetOption[ 0 ] ) ) ).toBeTruthy()
    } )
  } )
} )
