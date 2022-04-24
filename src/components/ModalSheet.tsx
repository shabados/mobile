import { BottomSheetBackdrop, BottomSheetBackdropProps, BottomSheetModal, BottomSheetScrollView } from '@gorhom/bottom-sheet'
import { ReactNode, useEffect, useRef } from 'react'
import { StyleSheet, View } from 'react-native'
import { Item } from 'react-navigation-header-buttons'

import { commonStrings, useTranslation } from '../services/i18n'
import Colors from '../themes/colors'
import Units from '../themes/units'
import { px } from '../themes/utils'
import Container from './Container'
import useLandscape from './use-landscape'

const styles = StyleSheet.create( {
  background: {
    backgroundColor: Colors.ModalSheet,
  },
  closeButton: {
    marginLeft: 'auto',
  },
  closeButtonText: {
    marginRight: 'auto',
    fontWeight: 'bold',
  },
  content: {
    overflow: 'visible',
    ...px( Units.HorizontalLayoutMargin * 2 ),
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    ...px( Units.HorizontalLayoutMargin * 2 ),
    borderTopRightRadius: Units.BorderRadius,
    borderTopLeftRadius: Units.BorderRadius,
    backgroundColor: Colors.ModalSheet,
    height: 50,
  },
} )

const Backdrop = ( props: BottomSheetBackdropProps ) => (
  <BottomSheetBackdrop
    {...props}
    appearsOnIndex={0}
    disappearsOnIndex={-1}
  />
)

export type ModalSheetProps = {
  open?: boolean,
  onClose?: () => void,
  children?: ReactNode,
}

const ModalSheet = ( {
  open,
  onClose = () => {},
  children,
}: ModalSheetProps ) => {
  const { isLandscape, landscapeStyle } = useLandscape()
  const snapPoints = isLandscape ? [ '75%', '98%' ] : [ '40%', '75%' ]

  const sheetRef = useRef<BottomSheetModal>( null )

  useEffect( () => {
    if ( open ) sheetRef.current?.present()
    else sheetRef.current?.dismiss()
  }, [ open ] )

  const { t } = useTranslation()

  return (
    <BottomSheetModal
      ref={sheetRef}
      style={landscapeStyle}
      snapPoints={snapPoints}
      backdropComponent={Backdrop}
      onDismiss={onClose}
      handleComponent={() => (
        <View style={styles.header}>
          <Item
            style={styles.closeButton}
            buttonStyle={styles.closeButtonText}
            title={t( commonStrings.done )}
            onPress={() => sheetRef.current?.dismiss()}
          />
        </View>
      )}
    >
      <Container style={styles.background} safeArea bottom>
        <BottomSheetScrollView style={[ styles.content, styles.background ]}>
          {children}
        </BottomSheetScrollView>
      </Container>
    </BottomSheetModal>
  )
}

export default ModalSheet
