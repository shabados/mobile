import { BottomSheetModalProps } from '@gorhom/bottom-sheet'
import { forwardRef, useImperativeHandle, useState } from 'react'
import { ScrollView, View } from 'react-native'
import { useSharedValue } from 'react-native-reanimated'

export * from '@gorhom/bottom-sheet'

export const BottomSheetModal = forwardRef( ( {
  handleComponent,
  children,
  onDismiss,
}: BottomSheetModalProps, ref ) => {
  const [ isOpen, setOpen ] = useState( false )
  const animatedIndex = useSharedValue( 0 )
  const present = () => {
    animatedIndex.value = 1
    setOpen( true )
  }

  const dismiss = () => {
    setOpen( false )
    onDismiss?.()
    animatedIndex.value = 0
  }

  useImperativeHandle( ref, () => ( { present, dismiss } ) )

  const modal = (
    <>
      {handleComponent?.( { animatedIndex, animatedPosition: animatedIndex } )}
      {children}
    </>
  )

  return <View>{isOpen ? modal : null}</View>
} )

export const BottomSheetScrollView = ScrollView
