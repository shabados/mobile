import { ContentType } from '../../types/data'

type Base = { id: string, name: string }

export type FolderContent = Base & { type: ContentType }

export type FolderItem = Folder | FolderContent

export type Folder = Base & { items: FolderItem[] }
