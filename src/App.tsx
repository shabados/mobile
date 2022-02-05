import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { Suspense } from 'react'

import DefaultFallback from './components/DefaultFallback'
import withContexts from './components/with-contexts'
import { collectionsScreen } from './screens/Collections'
import { gurbaniScreen } from './screens/Gurbani'
import { AppStackParams } from './screens/screens'
import { searchScreen } from './screens/Search'
import { settingsScreen } from './screens/Settings'

const { Screen, Navigator, Group } = createStackNavigator<AppStackParams>()

const screens = [
  gurbaniScreen,
  searchScreen,
  collectionsScreen,
  settingsScreen,
]

const App = () => (
  <Suspense fallback={<DefaultFallback />}>
    <NavigationContainer>
      <Navigator>
        <Group>
          {screens.map( ( options ) => <Screen key={options.name} {...options} /> ) }
        </Group>
      </Navigator>
    </NavigationContainer>
  </Suspense>
)

export default () => withContexts( <App /> )
