import { ParamListBase } from '@react-navigation/native'
import {
  BottomSheetNavigationEventMap,
  BottomSheetNavigationOptions,
  BottomSheetNavigationState,
  createBottomSheetNavigator,
} from '@th3rdwave/react-navigation-bottom-sheet'
import { withLayoutContext } from 'expo-router'
import { ComponentType } from 'react'

const { Navigator } = createBottomSheetNavigator() as { Navigator: ComponentType }

const BottomSheet = withLayoutContext<
  BottomSheetNavigationOptions,
  typeof Navigator,
  BottomSheetNavigationState<ParamListBase>,
  BottomSheetNavigationEventMap
>( Navigator )

export default BottomSheet
