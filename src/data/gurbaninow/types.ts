type SourcePartial = {
  id: number,
  length: number,
  akhar: string,
  pageName: { akhar: string },
}

type RaagPartial = {
  id: number,
  akhar: string,
  startang: number,
  engang: number,
}

type WriterPartial = {
  id: number,
  akhar: string,
}

type TranslationPartial = {
  english: { default: string },
  punjabi: { default: { akhar: string } },
  spanish: string,
}

type GurmukhiPartial = {
  akhar: string,
  unicode: string,
}

type LinePartial = {
  id: string,
  gurmukhi: GurmukhiPartial,
  translation: TranslationPartial,
}

export type ShabadResponse = {
  shabadinfo: {
    shabadid: string,
    pageno: number,
    source: SourcePartial,
    writer: WriterPartial,
    raag: RaagPartial,

  },
  shabad: { line: LinePartial & { linenum: number } }[],
}

export type BaniResponse = {
  baniinfo: {
    id: string,
    akhar: string,
    unicode: string,
    english: string,
    pageno: number,
    source: SourcePartial,
    raag: RaagPartial,
    writer: WriterPartial,
  },
  bani: { line: LinePartial & { pageno: number, lineno: number } }[],
}

export type SearchResponse = {
  count: number,
  shabads: {
    shabad: {
      id: string,
      shabadid: string,
      gurmukhi: GurmukhiPartial,
      translation: TranslationPartial,
      source: SourcePartial,
      writer: WriterPartial,
      raag: RaagPartial,
      pageno: number,
      lineno: number,
    },
  }[],
}
