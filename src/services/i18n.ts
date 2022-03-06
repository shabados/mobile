import i18n from 'i18next'
import { chain, mapValues } from 'lodash'
import { initReactI18next } from 'react-i18next'
import { findBestAvailableLanguage } from 'react-native-localize'

import { mutableCounter, mutableValue } from '../helpers/mutable-value'

export const languages = {
  'en-US': 'English (US)',
  'en-GB': 'English (UK)',
  pa: 'ਪੰਜਾਬੀ',
}

export type Languages = keyof typeof languages
type LanguageTranslations = Partial<typeof languages> & { 'en-US': string }

const { set: setIsInitialized, get: getIsInitialized } = mutableValue( false )
const { increment: nextNamespace } = mutableCounter()

export const registerTranslations = <
  Translations extends { [name in string]: LanguageTranslations },
>( translations: Translations ) => {
  const namespace = nextNamespace().toString()
  console.log( `[i18n] Adding resources to namespace ${namespace}: ${JSON.stringify( translations )}` )

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

export default i18n

export type { TFunction } from 'react-i18next'
export { Trans, useTranslation } from 'react-i18next'
