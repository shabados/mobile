export const languages = {
  'en-US': 'English (US)',
  'en-GB': 'English (UK)',
  pa: 'ਪੰਜਾਬੀ',
}

export type Languages = keyof typeof languages
export type LanguageTranslations = Partial<typeof languages> & { 'en-US': string }
