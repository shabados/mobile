import i18n from 'i18next'
import { chain, group, mapValues } from 'radashi'

import { mutableCounter } from '~/helpers/mutable-value'
import { createLogger } from '~/services/logger'

import { getIsInitialized } from './initialize'
import { Languages } from './languages'

const log = createLogger( 'i18n' )

const { increment: nextNamespace } = mutableCounter()

type LanguageTranslations = Partial<Record<Languages, string>> & { 'en': string }

const registerTranslations = <
  Translations extends Record<string, LanguageTranslations>,
>( translations: Translations ) => {
  const namespace = nextNamespace().toString()
  log.debug( `Adding resources to namespace "${namespace}"`, translations )

  // Group translations by language, with phrases as sub-keys for each language
  const translationsByLanguage = chain(
    // Turn the object into flat-pairs, where each sub-object has the key of the parent with it
    ( t: Translations ) => Object.entries( t ).flatMap( ( [ phraseName, languages ] ) => Object
      .entries( languages )
      .map( ( [ language, phrase ] ) => [
        language,
        phraseName,
        phrase,
      ] ) ),
    // Group the pairs into an object keyed by language
    ( t ) => group( t, ( [ language ] ) => language ),
    // Transform the grouped pairs into an object keyed by the phrase
    ( t ) => mapValues( t, ( phrases ) => phrases?.reduce( ( acc, [ , phraseName, phrase ] ) => ( {
      ...acc,
      [ phraseName  ]: phrase,
    } ), {} ) ),
  )( translations )

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
  return mapValues( translations, ( _, phraseName ) => ( `${namespace}:${phraseName.toString()}` ) )
}

export default registerTranslations
