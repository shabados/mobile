import { ContentType } from '../types/data'
import { Override } from '../types/utils'

enum Screens {
  Home = 'Home',
  Search = 'Search',
  Bookmarks = 'Bookmarks',
  Gurbani = 'Gurbani',
}

export type AppStackParams = Override<{ [screen in Screens]: undefined }, {
  [Screens.Gurbani]: { id: string, type: ContentTypes },
}>

export default Screens
