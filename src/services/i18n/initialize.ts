import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

import { mutableValue } from '~/helpers/mutable-value'
import { createLogger } from '~/services/logger'

import { findBestLanguage } from './languages'

const log = createLogger( 'i18n' )

export const { set: setIsInitialized, get: getIsInitialized } = mutableValue( false )

const initialize = () => i18n
  .use( initReactI18next )
  .init( {
    resources: {},
    lng: findBestLanguage()?.languageTag,
    fallbackLng: 'en',
    compatibilityJSON: 'v3',
    interpolation: { escapeValue: false },
  } )
  .then( () => {
    setIsInitialized( true )
    log.info( 'Loaded i18n with language lookup order', i18n.languages )
  } )
// TODO @harjot1singh handle catch properly with sentry
  .catch( log.error )

export default initialize
