export enum BookmarksNavigatorRoutes {
  bookmarks = 'BookmarksList'
}

export enum BookmarkIcon {
  folder = 'folder',
  shabad = 'file',
  bani = 'book-open'
}
export type BookmarksNavigatorParams = {
  [BookmarksNavigatorRoutes.bookmarks]: {folder?: string, data: Folder[]},
}

export type Folder = {
  name: string,
  icon: BookmarkIcon,
  items: Array<Folder | FolderItem>,
}

type FolderItem = {
  icon: BookmarkIcon,
  title: string,
}

