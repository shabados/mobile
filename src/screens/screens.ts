import { ContentType } from '../types/data'
import { Override } from '../types/utils'

enum Screens {
  Home = 'Home',
  Search = 'Search',
  Collections = 'Collections',
  Gurbani = 'Gurbani',
}

export type AppStackParams = Override<{ [screen in Screens]: undefined }, {
  [Screens.Gurbani]: { id: string, type: ContentType },
  [Screens.Collections]?: { path: string },
  [Screens.Search]: undefined,
}>

export default Screens
