import { ContentTypes } from '../../types/data'

/**
 * @note If there are `bookmarks` then there is no `type` cause it is a folder
 */
export type Folder = {
  id: string,
  name: string,
  type?: ContentTypes,
  bookmarks?: Folder[],
}
