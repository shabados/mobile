import Languages from '../../helpers/languages'
import { ShabadData } from '../../types/data'
import * as gurbaniNow from '../gurbaninow'

export const getShabad = async ( id: string ): Promise<ShabadData> => {
  const {
    shabadinfo: { source, writer, pageno },
    shabad,
  } = await gurbaniNow.getShabad( id )

  return {
    id,
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
    lines: shabad.map( ( { line: { id, translation, gurmukhi, linenum } } ) => ( {
      id,
      gurmukhi: gurmukhi.akhar,
      sourceLine: linenum,
      //! This is wrong for each line, but API doesn't provide this
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
