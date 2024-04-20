import { useQuery } from '@tanstack/react-query'

import { languages } from '~/helpers/languages'
import * as gurbaniNow from '~/services/gurbaninow'
import { ShabadData } from '~/types/data'

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
          translationSourceId: languages.english,
          translation: translation.english.default,
        },
        {
          translationSourceId: languages.punjabi,
          translation: translation.punjabi.default.akhar,
        },
        {
          translationSourceId: languages.spanish,
          translation: translation.spanish,
        },
      ].filter( ( { translation } ) => translation ),
    } ) ),
  }
}

export const shabadQuery = ( id: string ) => ( {
  queryKey: [ 'shabad', id ],
  queryFn: () => getShabad( id ),
} )
