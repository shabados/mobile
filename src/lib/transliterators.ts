import { toEnglish, toHindi, toShamukhi } from 'gurmukhi-utils'

import Languages from './languages'

const transliterators = {
  [ Languages.English ]: toEnglish,
  [ Languages.Hindi ]: toHindi,
  [ Languages.Urdu ]: toShamukhi,
}

export default transliterators
