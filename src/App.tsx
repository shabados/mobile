import { DarkTheme, DefaultTheme, NavigationContainer, NavigationContainerRef, ParamListBase } from '@react-navigation/native'
import { useKeepAwake } from 'expo-keep-awake'
import { Suspense, useRef } from 'react'
import { useColorScheme } from 'react-native'

import DefaultFallback from './components/DefaultFallback'
import withContexts from './components/with-contexts'
import RootNavigator from './screens/RootNavigator'
import telemetry from './services/telemetry'

const App = () => {
  useKeepAwake()
  const navigationRef = useRef<NavigationContainerRef<ParamListBase>>( null )

  return (
    <Suspense fallback={<DefaultFallback />}>
      <NavigationContainer
        ref={navigationRef}
        onReady={() => telemetry.registerNavigation( navigationRef )}
        theme={useColorScheme() === 'dark' ? DarkTheme : DefaultTheme}
      >
        <RootNavigator />
      </NavigationContainer>
    </Suspense>
  )
}

export default () => withContexts( <App /> )
