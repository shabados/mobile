import * as stackTraceParser from 'stacktrace-parser'

import * as registerTranslations from '~/services/i18n/register-translations'

const getComponentFromStack = () => stackTraceParser
  .parse( new Error().stack! )
  .find( ( { file } ) => file?.includes( 'src/' ) )!
  .file!
  .split( 'src/' )[ 1 ]

it( 'Extracting i18next translations', async () => {
  const allTranslations: { [key in string]: unknown } = {}
  jest.spyOn( registerTranslations, 'default' ).mockImplementation( ( translations ) => {
    allTranslations[ getComponentFromStack() ] = translations
    return {}
  } )

  require( '../src' )
  console.log( 'run this plz' )

  console.log( allTranslations )
} )
