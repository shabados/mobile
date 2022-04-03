import * as stackTraceParser from 'stacktrace-parser'

import initialize from '../src/services/i18n/initialize'
import * as registerTranslations from '../src/services/i18n/register-translations'
import { unmuteConsole } from '../test/utils/console'

const getComponentFromStack = () => stackTraceParser
  .parse( new Error().stack! )
  .find( ( { file } ) => file?.includes( 'src/' ) )!
  .file!
  .split( 'src/' )[ 1 ]

it( 'Extracting i18next translations', async () => {
  const allTranslations: { [key in string]: any } = {}
  jest.spyOn( registerTranslations, 'default' ).mockImplementation( ( translations ) => {
    allTranslations[ getComponentFromStack() ] = translations
    return {}
  } )

  await initialize()

  require( '../src/App' )

  unmuteConsole( 'log' )
  console.log( allTranslations )
} )
