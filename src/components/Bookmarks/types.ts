export type FolderItem = string

export type Folder = {
  name: string,
  bookmarks?: Array<Folder | FolderItem>,
}

