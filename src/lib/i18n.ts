import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

export enum Locales {
  EnglishUS = 'en-US',
  EnglishGB = 'en-GB',
  Punjabi = 'pa',
}

const resources = {
  [ Locales.EnglishUS ]: {
    translation: {
      searchBar: {
        placeholder: 'Search',
      },
    },
  },
  [ Locales.EnglishGB ]: {
    translation: {
      searchBar: {
        placeholder: 'Search',
      },
    },
  },
  [ Locales.Punjabi ]: {
    translation: {
      searchBar: {
        placeholder: 'ਖੌਜ',
      },
    },
  },
}

i18n
  .use( initReactI18next )
  .init( {
    resources,
    lng: Locales.EnglishUS,
    fallbackLng: Locales.EnglishUS,
    debug: true,
    interpolation: {
      escapeValue: false,
    },
  } )
  .catch( () => Error )

export default i18n
