import Languages from '../../lib/languages'
import { BookmarkData } from '../../types/data'
import * as gurbaniNow from './gurbaninow'

export const getBookmark = async ( id: string ): Promise<BookmarkData> => {
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
