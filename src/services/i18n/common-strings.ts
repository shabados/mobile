import registerTranslations from './register-translations'

const commonStrings = registerTranslations( {
  done: {
    en: 'Done',
    pa: 'ਹੋ ਗਿਆ',
    hi: 'हो गया',
    es: 'Listo',
    de: 'Fertig',
    fr: 'Terminé',
  },
  cancel: {
    en: 'Cancel',
    pa: 'ਰੱਦ ਕਰੋ',
    hi: 'रद्द करें',
    es: 'Cancelar',
    de: 'Abbrechen',
    fr: 'Annuler',
  },
} )

export default commonStrings
