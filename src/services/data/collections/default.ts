import { CollectionData } from '../../../types/data'

const defaultBookmarks = {
  japjiSahib: { id: '1', nameGurmukhi: 'jpu jI swihb' },
  jaapSahib: { id: '2', nameGurmukhi: 'jwpu swihb' },
  tavPrasadSravag: { id: '3', nameGurmukhi: 'qÍ pRswid svXy (sRwvg suD)' },
  bentiChaupai: { id: '4', nameGurmukhi: 'bynqI cOpeI swihb' },
  anandSahib: { id: '5', nameGurmukhi: 'Anµdu swihb' },
  anandSahibSalok: { id: '6', nameGurmukhi: 'Anµdu swihb (6 pauVIAW Aqy sloku)' },
  rehrasSahib: { id: '7', nameGurmukhi: 'rhrwis swihb' },
  rehrasSahibLong: { id: '8', nameGurmukhi: 'rhrwis swihb' },
  aarti: { id: '9', nameGurmukhi: 'AwrqI' },
  aartiLong: { id: '10', nameGurmukhi: 'AwrqI' },
  sohilaSahib: { id: '11', nameGurmukhi: 'soihlw swihb' },
  sukhmaniSahib: { id: '12', nameGurmukhi: 'suKmnI swihb' },
  asaKiVaar: { id: '13', nameGurmukhi: 'Awsw kI vwr' },
  ardaas: { id: '14', nameGurmukhi: 'Ardws' },
  salokMahla9: { id: '15', nameGurmukhi: 'slok mhlw 9' },
  shabadHazare: { id: '16', nameGurmukhi: 'Sbd hzwry' },
  shabadHazare10: { id: '17', nameGurmukhi: 'Sbd hzwry pwiqSwhI 10' },
  tavPrasadDeenan: { id: '18', nameGurmukhi: 'qÍ pRswid sÍXy (dInn kI)' },
  akalUstat: { id: '19', nameGurmukhi: 'Akwl ausqq' },
  bavanAkhri: { id: '20', nameGurmukhi: 'bwvn AKrI' },
  sidhGosht: { id: '21', nameGurmukhi: 'isD gosit' },
  oankaar: { id: '22', nameGurmukhi: 'EAMkwru' },
  baraMaha: { id: '23', nameGurmukhi: 'bwrh mwhw' },
  chandiDiVaar: { id: '24', nameGurmukhi: 'cMfI dI vwr' },
  lavan: { id: '25', nameGurmukhi: 'lwvW (Anµd kwrj)' },
  sggsBhogMundavanee: { id: '26', nameGurmukhi: 'sRI gurU gRMQ swihb dy pwT dw Bog (muMdwvxI)' },
  sggsBhogRaagmala: { id: '27', nameGurmukhi: 'sRI gurU gRMQ swihb dy pwT dw Bog (rwgmwlw)' },
  raamkaliSadu: { id: '28', nameGurmukhi: 'rwmklI sdu' },
}

const defaultCollections: CollectionData[] = [
  {
    id: 'nitnem',
    nameGurmukhi: 'inqnym',
    items: [
      defaultBookmarks.japjiSahib,
      defaultBookmarks.jaapSahib,
      defaultBookmarks.tavPrasadSravag,
      defaultBookmarks.bentiChaupai,
      defaultBookmarks.anandSahib,
      defaultBookmarks.rehrasSahib,
      defaultBookmarks.ardaas,
      defaultBookmarks.sohilaSahib,
    ],
  },
  {
    id: 'sundarGutka',
    nameGurmukhi: 'suMdr gutkw',
    items: Object.values( defaultBookmarks ),
  },
]

export default defaultCollections
