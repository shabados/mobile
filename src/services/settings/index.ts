import { useAtom } from 'jotai'

import atomWithSetting from './atom-with-setting'
import localeAtom from './locale'

export const settings = {
  locale: localeAtom,
  readerMode: atomWithSetting( 'readerMode', false ),
}

// ? Unsure how to take a string key and return the atom from the map above
export const useSetting = useAtom
