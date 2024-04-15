import { toEnglish, toHindi, toShahmukhi } from 'gurmukhi-utils'

import { Languages } from './languages'

export type TransliterableLanguages = Extract<Languages, 'english' | 'hindi' | 'urdu'>

type Transliterators = Record<
  TransliterableLanguages,
  ( text: string ) => string
>

const transliterators = {
  english: toEnglish,
  hindi: toHindi,
  urdu: toShahmukhi,
} as const satisfies Transliterators

export default transliterators
