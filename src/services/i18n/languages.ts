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
  // ms: 'Bahasa Melayu', // Malaysian
  es: 'Español', // Spanish
  // it: 'Italiano', // Italian
  de: 'Deutsch', // German
  fr: 'Français', // French
  // el: 'Ελληνικά', // Greek
  // jp: '日本語', // Japanese
  // th: 'ภาษาไทย', // Thai
  // sw: 'Kiswahili', // Swahili
  // bn: 'বাংলা', // Bengali
}

export type Languages = keyof typeof languages
export type LanguageTranslations = Partial<typeof languages> & { 'en': string }
