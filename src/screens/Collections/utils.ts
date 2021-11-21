import { toUnicode } from 'gurmukhi-utils'

import { CollectionData, ContentType } from '../../types/data'

import { Folder, FolderItem } from './types'

export const getIsFolder = ( item: FolderItem ): boolean => !!( item as Folder ).items

export const collectionsToFolder = ( items: CollectionData[] ): FolderItem[] => items.map( ( {
  nameGurmukhi,
  id,
  items,
} ) => ( {
  id,
  name: toUnicode( nameGurmukhi ),
  ...( items
    ? { items: collectionsToFolder( items ) }
    : { type: ContentType.Bookmark }
  ),
} ) )
