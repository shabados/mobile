import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'

import Screens from '../../lib/screens'
import { rightDrawer } from '../RightDrawer'

import DrawerContainer from './DrawerContainer'

const { Screen, Navigator } = createDrawerNavigator()

const LeftDrawer = () => (
  <Navigator
    drawerType="slide"
    drawerContent={( props ) => <DrawerContainer {...props} />}
  >
    <Screen key={rightDrawer.name} {...rightDrawer} />
  </Navigator>
)

export const leftDrawer = {
  name: Screens.LDrawer,
  component: LeftDrawer,
  options: { headerShown: false },
  initialParams: { },
}

export default LeftDrawer
