// import { NavigationContainer } from '@react-navigation/native'
// import { createNativeStackNavigator } from '@react-navigation/native-stack'
// import { render } from '@testing-library/react-native'
// import { Suspense } from 'react'
// import { Text } from 'react-native'

import { render } from '@testing-library/react-native'

import SettingsTemplate from '.'

describe( '<SettingsTemplate />', () => {
  describe( 'on mount', () => {
    it( 'should render without crashing', async () => {
      render( <SettingsTemplate /> )
    } )
  } )
} )
