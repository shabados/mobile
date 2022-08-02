import { toEnglish, toHindi, toShahmukhi } from 'gurmukhi-utils'

import Languages from './languages'

const transliterators = {
  [ Languages.English ]: toEnglish,
  [ Languages.Hindi ]: toHindi,
  [ Languages.Urdu ]: toShahmukhi,
}

export default transliterators
