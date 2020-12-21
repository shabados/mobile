import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from 'react-native-screens/native-stack'

import HomeScreen from './screens/HomeScreen'
import SearchScreen from './screens/SearchScreen'
import Screens from './lib/screens'
import Bookmarks from './screens/Bookmarks'

const Stack = createNativeStackNavigator()
const App = () => (
  <NavigationContainer>
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name={Screens.Home} component={HomeScreen} />
      <Stack.Screen name={Screens.Search} component={SearchScreen} />
      <Stack.Screen
        name={Screens.Bookmarks}
        component={Bookmarks}
        options={{ stackPresentation: 'modal' }}
      />
    </Stack.Navigator>
  </NavigationContainer>
)

export default App
