import { Factory } from 'fishery'
import { random } from 'faker'

import { LineData } from '../../src/types/data'

import sampleLines from './sggs-first-shabad.json'

export const line = Factory.define<LineData>( ( { sequence } ) => {
  const randomIndex = random.number( sampleLines.length - 1 )
  const { id, gurmukhi, translations } = sampleLines[ randomIndex ]

  return {
    gurmukhi,
    translations,
    id: `${id}${sequence}`,
    sourcePage: Math.floor( sequence / 10 ) + 1,
    sourceLine: sequence % 10,
  }
} )
