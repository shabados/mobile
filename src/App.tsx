import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator, StackNavigationOptions } from '@react-navigation/stack'

import withContexts from './components/with-contexts'
import { collectionsScreen } from './screens/Collections'
import { gurbaniScreen } from './screens/Gurbani'
import { AppStackParams } from './screens/screens'
import { searchScreen } from './screens/Search'

const { Screen, Navigator, Group } = createStackNavigator<AppStackParams>()

const screens = [ gurbaniScreen, searchScreen, collectionsScreen ]

const defaultScreenOptions: StackNavigationOptions = { presentation: 'modal' }

const App = () => (
  <NavigationContainer>
    <Navigator>
      <Group screenOptions={defaultScreenOptions}>
        {screens.map( ( options ) => <Screen key={options.name} {...options} /> )}
      </Group>
    </Navigator>
  </NavigationContainer>
)

export default () => withContexts( <App /> )
