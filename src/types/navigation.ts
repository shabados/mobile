import Screens from '../lib/screens'
import { Folder } from '../components/Bookmarks'

export type NavigationParams = {
  [Screens.Bookmarks]: {currentFolder?: string, folderData: Folder[]},
  [Screens.Home]: undefined,
  [Screens.Search]: undefined,
  [Screens.Gurbani]: undefined,
}
