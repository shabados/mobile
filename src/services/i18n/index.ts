import i18n from 'i18next'
import { TFunction, Trans, useTranslation } from 'react-i18next'

import commonStrings from './common-strings'
import initialize from './initialize'
import { Languages, languages } from './languages'
import registerTranslations from './register-translations'

export type { Languages, TFunction }
export { commonStrings, initialize, languages, registerTranslations, Trans, useTranslation }
export default i18n
