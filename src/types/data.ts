/* Shabad OS data definitions */

export type ContentType = 'shabad' | 'ang' | 'bani'

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

export type CollectionBani = {
  id: string,
  nameGurmukhi: string,
  type: 'bani',
}

export type CollectionShabad = {
  id: string,
  lineId: string,
  type: 'shabad',
}

export type CollectionAng = {
  id: string,
  lineId: string,
  type: 'ang',
}

type CollectionFolderCommon = {
  type: 'folder',
  items: CollectionItem[],
}

export type CollectionPresetFolder = {
  id: string,
  origin: 'preset',
  nameGurmukhi: string,
} & CollectionFolderCommon

export type CollectionUserFolder = {
  id: string,
  origin: 'user',
  name: string,
} & CollectionFolderCommon

export type CollectionFolder = CollectionPresetFolder | CollectionUserFolder

export type CollectionItem = CollectionFolder | CollectionShabad | CollectionAng | CollectionBani

export type CollectionItemType = CollectionItem['type']

export type SearchData = {
  shabad: ShabadData,
  line: LineData,
}
