import {
  BottomSheetBackdrop,
  BottomSheetBackdropProps,
  BottomSheetModal,
  BottomSheetScrollView,
} from '@gorhom/bottom-sheet'
import { ReactNode, useEffect, useRef } from 'react'
import { StyleSheet, View } from 'react-native'

import Container from '~/components/atoms/Container'
import Typography from '~/components/atoms/Typography'
import useOrientation from '~/hooks/use-orientation'
import { commonStrings, useTranslation } from '~/services/i18n'
import { Colors, px, units } from '~/themes'

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
    ...px( units.horizontalLayoutMargin * 2 ),
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    ...px( units.horizontalLayoutMargin * 2 ),
    borderTopRightRadius: units.borderRadius,
    borderTopLeftRadius: units.borderRadius,
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
  const { isLandscape } = useOrientation()
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
      snapPoints={snapPoints}
      backdropComponent={Backdrop}
      onDismiss={onClose}
      handleComponent={() => (
        <View style={styles.header}>
          <Typography
            style={styles.closeButton}
            // buttonStyle={styles.closeButtonText}
            onPress={() => sheetRef.current?.dismiss()}
          >
            {t( commonStrings.done )}
          </Typography>
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
