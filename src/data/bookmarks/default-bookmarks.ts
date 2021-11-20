import { pick } from 'lodash'

export const allDefaultBookmarks = {
  japjiSahib: { id: '1', nameGurmukhi: 'jpu jI swihb' },
  jaapSahib: { id: '2', nameGurmukhi: 'jwpu swihb' },
  tavPrasadSravag: { id: '3', nameGurmukhi: 'qÍ pRswid svXy (sRwvg suD)' },
  bentiChaupai: { id: '4', nameGurmukhi: 'bynqI cOpeI swihb' },
  anandSahib: { id: '5', nameGurmukhi: 'Anµdu swihb' },
  anandSahibSalok: { id: '6', nameGurmukhi: 'Anµdu swihb (6 pauVIAW Aqy sloku)' },
  rehrasSahib: { id: '7', nameGurmukhi: 'rhrwis swihb' },
  aarti: { id: '8', nameGurmukhi: 'AwrqI' },
  sohilaSahib: { id: '9', nameGurmukhi: 'soihlw swihb' },
  sukhmaniSahib: { id: '10', nameGurmukhi: 'suKmnI swihb' },
  asaKiVaar: { id: '11', nameGurmukhi: 'Awsw kI vwr' },
  ardaas: { id: '12', nameGurmukhi: 'Ardws' },
  salokMahla9: { id: '13', nameGurmukhi: 'slok mhlw 9' },
  shabadHazare: { id: '14', nameGurmukhi: 'Sbd hzwry' },
  shabadHazare10: { id: '15', nameGurmukhi: 'Sbd hzwry pwiqSwhI 10' },
  tavPrasadDeenan: { id: '16', nameGurmukhi: 'qÍ pRswid sÍXy (dInn kI)' },
  akalUstat: { id: '17', nameGurmukhi: 'Akwl ausqq' },
  bavanAkhri: { id: '18', nameGurmukhi: 'bwvn AKrI' },
  sidhGosht: { id: '19', nameGurmukhi: 'isD gosit' },
  oankaar: { id: '20', nameGurmukhi: 'EAMkwru' },
  baraMaha: { id: '21', nameGurmukhi: 'bwrh mwhw' },
  chandiDiVaar: { id: '22', nameGurmukhi: 'cMfI dI vwr' },
  lavan: { id: '23', nameGurmukhi: 'lwvW (Anµd kwrj)' },
  sggsBhogMundavanee: { id: '24', nameGurmukhi: 'sRI gurU gRMQ swihb dy pwT dw Bog (muMdwvxI)' },
  sggsBhogRaagmala: { id: '25', nameGurmukhi: 'sRI gurU gRMQ swihb dy pwT dw Bog (rwgmwlw)' },
  raamkaliSadu: { id: '26', nameGurmukhi: 'rwmklI sdu' },
}

const defaultBookmarks = {
  nitnem: {
    id: 'nitnem',
    nameGurmukhi: 'inqnym',
    items: pick( allDefaultBookmarks, [
      'japjiSahib',
      'jaapSahib',
      'AS',
      'tavPrasadSravag',
      'bentiChaupai',
      'anandSahib',
      'rehrasSahib',
      'ardaas',
      'sohilaSahib',
    ] ),
  },
  sundarGutka: {
    id: 'sundarGutka',
    nameGurmukhi: 'suMdr gutkw',
    items: allDefaultBookmarks,
  },
}

export default defaultBookmarks
