import { NavigationContainer } from '@react-navigation/native'
import { Suspense } from 'react'

import DefaultFallback from './components/DefaultFallback'
import withContexts from './components/with-contexts'
import RootNavigator from './screens/RootNavigator'

const App = () => (
  <Suspense fallback={<DefaultFallback />}>
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  </Suspense>
)

export default () => withContexts( <App /> )
