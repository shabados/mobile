import i18n from 'i18next'
import { chain, mapValues } from 'lodash'
import { initReactI18next } from 'react-i18next'
import { findBestAvailableLanguage } from 'react-native-localize'

import mutableValue from '../helpers/mutable-value'

export const languages = [ 'en-US', 'en-GB', 'pa' ] as const
export type Languages = typeof languages[number]

const { set: setIsInitialized, get: getIsInitialized } = mutableValue( false )

export const registerTranslations = <
  Translations extends { [key in string]: Partial<{ [key in Languages]: string }> },
>( namespace: string, translations: Translations ) => {
  console.log( `[i18n] Adding resources: ${namespace}` )

  // Group translations by language, with phrases as sub-keys for each language
  const translationsByLanguage = chain( translations )
    // Turn the object into flat-pairs, where each sub-object has the key of the parent with it
    .flatMap( ( languages, phraseName ) => Object
      .entries( languages )
      .map( ( [ language, phrase ] ) => [
        language,
        phraseName,
        phrase,
      ] ) )
    // Group the pairs into an object keyed by language
    .groupBy( ( [ language ] ) => language )
    // Transform the grouped pairs into an object keyed by the phrase
    .mapValues( ( phrases ) => phrases.reduce( ( acc, [ , phraseName, phrase ] ) => ( {
      ...acc,
      [ phraseName  ]: phrase,
    } ), {} ) )
    .value()

  const registerResourceBundle = () => Object
    .entries( translationsByLanguage )
    .forEach( ( [ languageCode, languageTranslations ] ) => i18n.addResourceBundle(
      languageCode,
      namespace,
      languageTranslations,
    ) )

  if ( getIsInitialized() ) registerResourceBundle()
  else i18n.on( 'initialized', registerResourceBundle )

  // Return namespaced phrases
  return mapValues( translations, ( _, phraseName ) => ( `${namespace}:${phraseName}` ) )
}

export const initialise = () => void i18n
  .use( initReactI18next )
  .init( {
    resources: {},
    lng: findBestAvailableLanguage( languages )?.languageTag,
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

export default i18n
