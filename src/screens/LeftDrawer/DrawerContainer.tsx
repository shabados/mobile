import React from 'react'
import { Text } from 'react-native'
import {
  DrawerContentScrollView,
} from '@react-navigation/drawer'

function DrawerContainer( props: any ) {
  return (
    <DrawerContentScrollView style={{ backgroundColor: 'black', marginRight: 10 }} {...props}>
      <Text style={{ color: 'white' }}>Left Drawer Custom View</Text>
    </DrawerContentScrollView>
  )
}

export default DrawerContainer
