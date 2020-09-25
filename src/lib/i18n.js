import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

const resources = {
  'en-US': {
    translation: {
      searchBar: {
        placeholder: 'Search',
      },
    },
  },
  'en-GB': {
    translation: {
      searchBar: {
        placeholder: 'Search',
      },
    },
  },
  pa: {
    translation: {
      searchBar: {
        placeholder: 'ਖੌਜ',
      },
    },
  },
}

i18n.use(initReactI18next).init({
  resources,
  lng: 'en-US',
  fallbackLng: 'en-US',
  debug: true,
  interpolation: {
    escapeValue: false,
  },
})

export default i18n
