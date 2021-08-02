import { Folder } from './types'

export const checkIsFolder = ( item: Folder ): item is Folder => !!( item ).bookmarks
