import { getLocales } from 'expo-localization'

// language codes according to ISO 639‑1
// country/locale codes according to 3166-2
export const languages = {
  en: 'English (US)',
  'en-GB': 'English (UK)',
  pa: 'ਪੰਜਾਬੀ',
  // 'pa-PK': 'پن٘جابی',
  // ar: 'العربية', // Arabic
  // fa: 'فارسی', // Persian / Dari
  hi: 'हिन्दी',
  ms: 'Bahasa Melayu', // Malaysian
  de: 'Deutsch', // German
  es: 'Español', // Spanish
  el: 'Ελληνικά', // Greek
  fr: 'Français', // French
  it: 'Italiano', // Italian
  fil: 'Wikang Filipino', // Filipino
  jp: '日本語', // Japanese
  ko: '한국어', // Korean
  th: 'ภาษาไทย', // Thai
}

export type Languages = keyof typeof languages

export const findBestLanguage = ( languageTags = Object.keys( languages ) ) => {
  const lowerLanguageTags = languageTags.map( ( tag ) => tag.toLowerCase() )

  return getLocales()
    .flatMap( ( { languageTag, languageCode, textDirection } ) => [ languageTag, languageCode ]
      .flatMap( ( component ) => {
        const tagIndex = lowerLanguageTags.indexOf( component!.toLowerCase() )
        const languageTag = languageTags[ tagIndex ]

        return ( languageTag && tagIndex !== -1 )
          ? [ { languageTag, isRTL: textDirection === 'rtl' } ]
          : []
      } ) )[ 0 ]
}
