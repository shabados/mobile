import { useAtom } from 'jotai'

import localeAtom from './locale'

export const settings = {
  locale: localeAtom,
}

// ? Unsure how to take a string key and return the atom from the map above
export const useSetting = useAtom
