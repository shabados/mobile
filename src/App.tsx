import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator, StackNavigationOptions } from '@react-navigation/stack'

import withContexts from './components/with-contexts'
import { collectionsScreen } from './screens/Collections'
import { gurbaniScreen } from './screens/Gurbani'
import { AppStackParams } from './screens/screens'
import { searchScreen } from './screens/Search'

const screens = [ gurbaniScreen, searchScreen, collectionsScreen ]

const { Screen, Navigator } = createStackNavigator<AppStackParams>()

const defaultScreenOptions: StackNavigationOptions = { presentation: 'modal' }

const App = () => (
  <NavigationContainer>
    <Navigator defaultScreenOptions={defaultScreenOptions}>
      {screens.map( ( options ) => <Screen key={options.name} {...options} /> )}
    </Navigator>
  </NavigationContainer>
)

export default () => withContexts( <App /> )
