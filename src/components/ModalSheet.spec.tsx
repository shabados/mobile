import { fireEvent, render, waitForElementToBeRemoved } from '@testing-library/react-native'
import { useState } from 'react'
import { Text, View } from 'react-native'

import { wrapper } from '../../test/utils/navigation'
import Button from './Button'
import ModalSheet, { ModalSheetProps } from './ModalSheet'

const WrapperModal = ( {
  open,
  onClose,
  ...props
}: ModalSheetProps ) => {
  const [ isOpen, setOpen ] = useState( open )
  const handleClose = () => {
    onClose?.()
    setOpen( false )
  }

  return (
    <View>
      <Button onPress={() => setOpen( true )}>Open</Button>
      <Button onPress={() => setOpen( false )}>Close</Button>

      <ModalSheet {...props} onClose={handleClose} open={isOpen} />
    </View>
  )
}

const setup = ( props: ModalSheetProps = {} ) => render(
  <WrapperModal {...props}>
    <Text>Content</Text>
  </WrapperModal>,
  { wrapper }
)

describe( '<ModalSheet />', () => {
  it( 'should open the modal and render children when the open prop is true', () => {
    const { queryByText } = setup( { open: true } )

    expect( queryByText( 'Content' ) ).toBeTruthy()
  } )

  it( 'should close the modal when done is pressed', async () => {
    const onClose = jest.fn()
    const { findByText, queryByText } = setup( { open: true, onClose } )

    fireEvent.press( await findByText( 'Done' ) )

    await waitForElementToBeRemoved( () => queryByText( 'Done' ) )
    expect( onClose ).toHaveBeenCalled()
  } )

  it( 'should open the modal when the open prop changes to true', () => {
    const { queryByText, getByText } = setup( { open: false } )

    expect( queryByText( 'Done' ) ).toBeFalsy()
    fireEvent.press( getByText( 'Open' ) )

    expect( queryByText( 'Done' ) ).toBeTruthy()
  } )

  it( 'should close the modal when the open prop changes to false', () => {
    const { queryByText, getByText } = setup( { open: true } )

    expect( queryByText( 'Done' ) ).toBeTruthy()
    fireEvent.press( getByText( 'Close' ) )

    expect( queryByText( 'Done' ) ).toBeFalsy()
  } )
} )
