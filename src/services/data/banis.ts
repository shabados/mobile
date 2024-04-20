import { useQuery } from '@tanstack/react-query'

import { languages } from '~/helpers/languages'
import * as gurbaniNow from '~/services/gurbaninow'
import { BaniData } from '~/types/data'

export const getBani = async ( id: string ): Promise<BaniData> => {
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

export const baniQuery = ( id: string ) => ( {
  queryFn: () => getBani( id ),
  queryKey: [ 'content', 'bani', id ],
} )
