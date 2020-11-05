export enum BookmarkTypes {
  folder = 'folder',
  shabad = 'file',
  bani = 'book-open'
}
export enum BookmarksNavigatorRoutes {
  bookmarks = 'BookmarksList'
}
export type BookmarksNavigatorParams = {
  [BookmarksNavigatorRoutes.bookmarks]: {folder?: string, folderData: FolderData[]},
}

export type FolderData = {
  folderName: string,
  type: BookmarkTypes,
  items: FolderItem[],
}

type FolderItem = {
  type: BookmarkTypes,
  name: string,
}

