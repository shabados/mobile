import { DarkTheme, DefaultTheme, NavigationContainer } from '@react-navigation/native'
import { Suspense } from 'react'
import { useColorScheme } from 'react-native'

import DefaultFallback from './components/DefaultFallback'
import withContexts from './components/with-contexts'
import RootNavigator from './screens/RootNavigator'

const App = () => (
  <Suspense fallback={<DefaultFallback />}>
    <NavigationContainer theme={useColorScheme() === 'dark' ? DarkTheme : DefaultTheme}>
      <RootNavigator />
    </NavigationContainer>
  </Suspense>
)

export default () => withContexts( <App /> )
