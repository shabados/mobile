import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { createStackNavigator } from '@react-navigation/stack'

import Screens, { AppStackParams } from '../../lib/screens'
import { gurbaniScreen } from '../Gurbani'
import { searchScreen } from '../Search'

import DrawerContainer from './DrawerContainer'

const { Screen, Navigator } = createDrawerNavigator()
const { Screen: StackScreen, Navigator: StackNavigator } = createStackNavigator<AppStackParams>()

const screens = [ gurbaniScreen, searchScreen ]

function Main() {
  return (
    <StackNavigator mode="modal">
      {screens.map( ( options ) => <StackScreen key={options.name} {...options} /> )}
    </StackNavigator>
  )
}

const RightDrawer = () => (
  <Navigator
    drawerType="slide"
    drawerPosition="right"
    drawerContent={( props ) => <DrawerContainer {...props} />}
  >
    <Screen name="Main" component={Main} />
  </Navigator>
)

export const rightDrawer = {
  name: Screens.RDrawer,
  component: RightDrawer,
  options: { headerShown: false },
  initialParams: { },
}

export default RightDrawer
