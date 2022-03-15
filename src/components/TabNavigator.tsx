import { MaterialTopTabNavigationEventMap, MaterialTopTabNavigationOptions, MaterialTopTabView } from '@react-navigation/material-top-tabs'
import { MaterialTopTabNavigationConfig } from '@react-navigation/material-top-tabs/lib/typescript/src/types'
import {
  createNavigatorFactory,
  DefaultNavigatorOptions,
  ParamListBase,
  TabActionHelpers,
  TabNavigationState,
  TabRouter,
  TabRouterOptions,
  useNavigationBuilder,
} from '@react-navigation/native'
import { useState } from 'react'

type TabNavigationConfig = MaterialTopTabNavigationConfig
type TabNavigationOptions = MaterialTopTabNavigationOptions
type TabNavigationEventMap = MaterialTopTabNavigationEventMap

type Props = DefaultNavigatorOptions<
ParamListBase,
TabNavigationState<ParamListBase>,
TabNavigationOptions,
TabNavigationEventMap
>
& TabRouterOptions
& TabNavigationConfig

const TabNavigator = ( {
  initialRouteName,
  backBehavior,
  children,
  screenOptions,
  ...rest
}: Props ) => {
  const [ isSwipeEnabled, setSwipeEnabled ] = useState( true )
  const swipeTimeout = () => {
    setSwipeEnabled( false )
    setTimeout( () => setSwipeEnabled( true ), 1000 )
  }

  const { state, descriptors, navigation } = useNavigationBuilder<
  TabNavigationState<ParamListBase>,
  TabRouterOptions,
  TabActionHelpers<ParamListBase>,
  TabNavigationOptions,
  TabNavigationEventMap
  >( TabRouter, {
    initialRouteName,
    backBehavior,
    children,
    screenOptions: {
      ...screenOptions,
      swipeEnabled: isSwipeEnabled,
    },
    // Swiping during a navigation triggered by buttons breaks the navigation stack.
    // This is because events are not synchronised in the library at the right time.
    // This turns off swipe once a screen is being navigated away from programatically
    // or with a button press, and re-enables it after some time, to compensate for this.
    screenListeners: {
      blur: swipeTimeout,
      swipeEnd: () => setSwipeEnabled( true ),
    },
  } )

  return (
    <MaterialTopTabView
      {...rest}
      state={state}
      navigation={navigation}
      descriptors={descriptors}
    />
  )
}

export default createNavigatorFactory( TabNavigator )
