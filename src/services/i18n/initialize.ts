import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import { findBestAvailableLanguage } from 'react-native-localize'

import { mutableValue } from '../../helpers/mutable-value'
import { languages } from './languages'

export const { set: setIsInitialized, get: getIsInitialized } = mutableValue( false )

const initialize = () => i18n
  .use( initReactI18next )
  .init( {
    resources: {},
    lng: findBestAvailableLanguage( Object.keys( languages ) )?.languageTag,
    fallbackLng: 'en-US',
    compatibilityJSON: 'v3',
    interpolation: { escapeValue: false },
  } )
  .then( () => {
    setIsInitialized( true )
    console.log( '[i18n] Loaded i18n' )
  } )
// TODO @harjot1singh handle catch properly with sentry
  .catch( console.error )

export default initialize
