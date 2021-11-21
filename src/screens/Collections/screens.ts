import { FolderItem } from './types'

export enum CollectionScreens {
  List = 'List',
}

export type CollectionsStackParams = {
  [CollectionScreens.List]: { items: FolderItem[] },
}
