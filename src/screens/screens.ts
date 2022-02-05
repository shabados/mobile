import { StackNavigationOptions, StackScreenProps } from '@react-navigation/stack'
import { FunctionComponent } from 'react'

import { ContentType } from '../types/data'
import { Override } from '../types/utils'

enum Screens {
  Home = 'Home',
  Search = 'Search',
  Collections = 'Collections',
  Gurbani = 'Gurbani',
  Settings = 'Settings',
}

export type AppStackParams = Override<{ [screen in Screens]: undefined }, {
  [Screens.Gurbani]: { id: string, type: ContentType },
  [Screens.Collections]?: { path: string },
}>

export type ScreenProps<Screen extends Screens = Screens> = StackScreenProps<AppStackParams, Screen>

export type ScreenOptions<Props, Screen extends Screens = Screens> = {
  name: Screen,
  component: FunctionComponent<Props>,
  options?: StackNavigationOptions,
  initialParams?: AppStackParams[Screen],
}

export default Screens
