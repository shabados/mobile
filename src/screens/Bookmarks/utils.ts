import { toUnicode } from 'gurmukhi-utils'

import { BookmarkData, ContentType } from '../../types/data'

import { Folder, FolderItem } from './types'

export const getIsFolder = ( item: FolderItem ): boolean => !!( item as Folder ).items

export const bookmarksToFolder = ( items: BookmarkData[] ): FolderItem[] => items.map( ( {
  nameGurmukhi,
  id,
  items,
} ) => ( {
  id,
  name: toUnicode( nameGurmukhi ),
  ...( items
    ? { items: bookmarksToFolder( Object.values( items ) ) }
    : { type: ContentType.Bookmark }
  ),
} ) )
