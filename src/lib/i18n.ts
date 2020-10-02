import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

export enum Language {
  EnGB = 'en-GB',
  EnUS = 'en-US',
  Pa = 'pa',
}

// TODO @Harjot1Singh confirm code below for potential pitfalls or optimizations
// @bhajneet has concerns that there is a shorter/easier to read solution
// and that perhaps if a translation key is missing, there would be an error or such
export const createTranslations = (
  translation: Record<string, Record<Language, string>>,
  namespace: string,
) => {
  Object.values( Language ).forEach( ( languageCode ) => {
    const phrases = Object.create( null )

    Object.entries( translation ).forEach( ( [ key, value ] ) => {
      phrases[ key ] = value[ languageCode ]
    } )

    console.log( languageCode, phrases )
    i18n.addResourceBundle( languageCode, namespace, phrases )
  } )
}

i18n
  .use( initReactI18next )
  .init( {
    resources: {},
    lng: Language.EnUS,
    fallbackLng: Language.EnUS,
    debug: true,
    interpolation: {
      escapeValue: false,
    },
  } )
  // TODO @harjot1singh handle catch properly with sentry
  .catch( console.error )

export default i18n
