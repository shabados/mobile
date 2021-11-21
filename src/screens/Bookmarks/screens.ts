import { FolderItem } from './types'

export enum BookmarksScreens {
  List = 'List',
}

export type BookmarksStackParams = {
  [BookmarksScreens.List]: { items: FolderItem[] },
}
