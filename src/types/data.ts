/* Shabad OS data definitions */

export type TranslationData = {
  translationSourceId: number,
  translation: string,
}

export type LineData = {
  id: string,
  gurmukhi: string,
  translations: TranslationData[],
  sourcePage: number,
  sourceLine: number,
}

export type ShabadData = {
  id: string,
  writer: { id: number, nameGurmukhi: string },
  source: { id: number, nameGurmukhi: string, pageNameGurmukhi: string, length: number },
  lines: LineData[],
}

export type BaniData = {
  id: number,
  nameGurmukhi: string,
  lines: LineData[],
}

export type SearchData = {
  shabad: ShabadData,
  line: LineData,
}
