import Screens from '../lib/screens'
import { Folder, FolderItem } from '../components/Bookmarks'

export type NavigationParams = {
  [Screens.Bookmarks]: {currentFolder?: string, folderData: Array<Folder | FolderItem>},
  [Screens.Home]: undefined,
  [Screens.Search]: undefined,
  [Screens.Tabs]: undefined,
  [Screens.History]: undefined,
}
