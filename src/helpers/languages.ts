//* Currently set to the order of languages.json from database
export const languages = {
  english: 0,
  punjabi: 1,
  spanish: 2,
  hindi: 3,
  urdu: 4,
} as const

export type Languages = keyof typeof languages
