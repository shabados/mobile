/* Shabad OS data definitions */

export type TranslationData = {
  translationSourceId: number,
  translation: string,
}

export type LineData = {
  id: string,
  gurmukhi: string,
  translations: TranslationData[],
}
