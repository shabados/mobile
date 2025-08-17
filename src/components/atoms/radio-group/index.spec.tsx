import { fireEvent, render, screen, within } from '@testing-library/react-native'
import { ViewStyle } from 'react-native'
import { ReactTestInstance } from 'react-test-renderer'

import { Colors } from '~/themes'

import RadioGroup, { RadioGroupProps } from '.'

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

const isOptionActive = ( nameElement: ReactTestInstance ) => (
  within( nameElement.parent!.parent!.parent! )
    .getByTestId( 'radio-bullet' )
    .props
    .style as ViewStyle[] )
  .some( ( { backgroundColor } ) => backgroundColor === Colors.Active )

describe( '<RadioGroup />', () => {
  describe( 'initially', () => {
    it( 'should render the names of all items', () => {
      setup()

      OPTIONS.forEach( ( [ name ] ) => expect( screen.queryByText( name ) ).toBeTruthy() )
    } )

    it( 'should set the current item to initialValue', () => {
      const [ name, value ] = OPTIONS[ 1 ]

      setup( { initialValue: value } )

      expect( isOptionActive( screen.getByText( OPTIONS[ 0 ][ 0 ] ) ) ).toBeFalsy()
      expect( isOptionActive( screen.getByText( OPTIONS[ 2 ][ 0 ] ) ) ).toBeFalsy()
      expect( isOptionActive( screen.getByText( name ) ) ).toBeTruthy()
    } )
  } )

  describe( 'given an item is pressed', () => {
    it( 'should fire onChange with the pressed value and name', () => {
      const [ name, value ] = OPTIONS[ 2 ]
      const onChange = jest.fn()
      setup( { onChange } )

      fireEvent.press( screen.getByText( name ) )

      expect( onChange ).toHaveBeenCalledWith( value, name )
    } )

    it( 'should change the current item to the pressed item', () => {
      const [ name ] = OPTIONS[ 2 ]
      setup()

      fireEvent.press( screen.getByText( name ) )

      expect( isOptionActive( screen.getByText( name ) ) ).toBeTruthy()
    } )
  } )
} )
