import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

export enum Language {
  EnUS = 'en-US',
  EnGB = 'en-GB',
  Pa = 'pa',
}

export const createTranslations = (
  translations: Record<Language, Record<string, string>>,
  namespace: string,
) => {
  Object.values( Language ).forEach( ( languageCode ) => {
    i18n.addResourceBundle( languageCode, namespace, translations[ languageCode ] )
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
