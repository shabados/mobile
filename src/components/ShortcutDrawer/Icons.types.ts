import { FC } from 'react'

type IconNamesType = 'SearchIcon' | 'HistoryIcon' | 'BookmarkIcon' | 'TabsIcon' | 'DotsIcon'

export type IconsType = {
  [icon in IconNamesType]: FC<object>
}

