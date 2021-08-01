import { ContentTypes } from '../../types/data'

export type Folder = {
  id: string,
  name: string,
  type: ContentTypes,
  bookmarks?: Folder[],
}
