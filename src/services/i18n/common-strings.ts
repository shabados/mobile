import registerTranslations from './register-translations'

const commonStrings = registerTranslations( {
  done: {
    en: 'Done',
    pa: 'ਹੋ ਗਿਆ',
    hi: 'हो गया',
    de: 'Fertig',
    es: 'Listo',
    el: 'Τέλος',
    fr: 'Terminé',
    it: 'Fine',
    fil: 'Tapos na',
    jp: '完了',
    ko: '완료',
  },
  cancel: {
    en: 'Cancel',
    pa: 'ਰੱਦ ਕਰੋ',
    hi: 'रद्द करें',
    de: 'Abbrechen',
    es: 'Cancelar',
    el: 'Ακύρωση',
    fr: 'Annuler',
    it: 'Annulla',
    fil: 'Ikansela',
    jp: 'キャンセル',
    ko: '취소',
  },
} )

export default commonStrings
