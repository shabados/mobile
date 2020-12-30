export type FolderItem = string
export type Folder = {
  name: string,
  bookmarks?: Array<Folder | FolderItem>,
}

export const checkIsFolder = ( item: Folder | FolderItem ): item is Folder => !!( item as Folder ).bookmarks
