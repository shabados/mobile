import React from 'react'
import { createStackNavigator, StackNavigationOptions } from '@react-navigation/stack'
import { useQuery } from 'react-query'
import { Text } from 'react-native'

import Screens from '../screens'
import Container from '../../components/Container'
import { getCollections } from '../../data/collections'

import Items from './Items'
import Navbar from './Navbar'
import { CollectionScreens, CollectionsStackParams } from './screens'
import { collectionsToFolder } from './utils'

const { Screen, Navigator } = createStackNavigator<CollectionsStackParams>()

const screenOptions: StackNavigationOptions = { headerShown: false }

const collectionsQuery = () => getCollections().then( collectionsToFolder )

const CollectionsScreen = () => {
  const { data: items } = useQuery( 'collections-screen', collectionsQuery )

  if ( !items ) return <Text>Loading</Text>

  return (
    <Container>
      <Navigator defaultScreenOptions={screenOptions}>
        <Screen name={CollectionScreens.List} component={Items} initialParams={{ items }} />
      </Navigator>
    </Container>
  )
}

export const collectionsScreen = {
  name: Screens.Collections,
  component: CollectionsScreen,
  options: {
    header: Navbar,
    cardStyle: { backgroundColor: 'transparent' },
  },
}

export default CollectionsScreen
