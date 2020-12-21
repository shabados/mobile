import {
  BookmarkIcon,
  Folder,
} from '../types/bookmarks'

const MockData: Folder[] = [
  {
    name: 'bookmarks section 1',
    icon: BookmarkIcon.folder,
    items: [
      {
        icon: BookmarkIcon.shabad,
        name: 'section 1 child 1',
      },
      {
        icon: BookmarkIcon.shabad,
        name: 'section 1 child 2',
      },
    ],
  },
  {
    name: 'bookmarks section 2',
    icon: BookmarkIcon.folder,
    items: [
      {
        icon: BookmarkIcon.bani,
        name: 'section 1 child 1',
      },
      {
        icon: BookmarkIcon.bani,
        name: 'section 1 child 2',
      },
    ],
  },
  {
    name: 'top level item',
    icon: BookmarkIcon.bani,
  },
]

export default MockData
