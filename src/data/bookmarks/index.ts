import { BookmarkLinesData, BookmarkData } from '../../types/data'
import Languages from '../../lib/languages'
import * as gurbaniNow from '../gurbaninow'

import defaultBookmarks from './default-bookmarks'

//! Really bookmarks should be defined as a fetch between line groups and line ranges
//! but they're currently constrained by shabad and bani according to legacy design
export const getBookmarks = async (): Promise<BookmarkData[]> => Object.values( defaultBookmarks )

export const getBookmark = async ( id: string ): Promise<BookmarkLinesData> => {
  const {
    baniinfo: { source, writer, akhar },
    bani,
  } = await gurbaniNow.getBani( id )

  return {
    id,
    nameGurmukhi: akhar,
    source: {
      id: source.id,
      length: source.length,
      nameGurmukhi: source.akhar,
      pageNameGurmukhi: source.pageName.akhar,
    },
    writer: {
      id: writer.id,
      nameGurmukhi: writer.akhar,
    },
    lines: bani.map( ( { line: { id, translation, gurmukhi, lineno, pageno } } ) => ( {
      id,
      gurmukhi: gurmukhi.akhar,
      sourceLine: lineno,
      sourcePage: pageno,
      //! translationSourceId is just set per language for now
      translations: [
        {
          translationSourceId: Languages.English,
          translation: translation.english.default,
        },
        {
          translationSourceId: Languages.Punjabi,
          translation: translation.punjabi.default.akhar,
        },
        {
          translationSourceId: Languages.Spanish,
          translation: translation.spanish,
        },
      ].filter( ( { translation } ) => translation ),
    } ) ),
  }
}
