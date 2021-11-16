import i18n from 'i18next'
import { chain, mapValues } from 'lodash'
import { initReactI18next } from 'react-i18next'

export enum Language {
  EnGB = 'en-GB',
  EnUS = 'en-US',
  Pa = 'pa',
}

export function registerTranslations<
  Translations extends Record<string, Partial<Record<Language, string>>>,
>(
  namespace: string,
  translations: Translations,
) {
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

  // Add translations for supported langauges
  Object
    .entries( translationsByLanguage )
    .forEach( ( [ languageCode, languageTranslations ] ) => i18n.addResourceBundle(
      languageCode,
      namespace,
      languageTranslations,
    ) )

  // Return namespaced phrases
  return mapValues( translations, ( _, phraseName ) => ( `${namespace}:${phraseName}` ) )
}

i18n
  .use( initReactI18next )
  .init( {
    resources: {},
    lng: Language.EnUS,
    fallbackLng: Language.EnUS,
    interpolation: {
      escapeValue: false,
    },
  } )
  // TODO @harjot1singh handle catch properly with sentry
  .catch( console.error )

export default i18n
