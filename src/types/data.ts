/* Shabad OS data definitions */

export enum ContentTypes {
  Shabad = 'shabad',
  Bani = 'bani',
  Ang = 'ang',
}

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

type SourcePartial = {
  id: number,
  nameGurmukhi: string,
  pageNameGurmukhi: string,
  length: number,
}

type WriterPartial = {
  id: number,
  nameGurmukhi: string,
}

export type ShabadData = {
  id: string,
  writer: WriterPartial,
  source: SourcePartial,
  lines: LineData[],
}

export type BaniData = {
  id: string,
  nameGurmukhi: string,
  writer: WriterPartial,
  source: SourcePartial,
  lines: LineData[],
}

export type SearchData = {
  shabad: ShabadData,
  line: LineData,
}
