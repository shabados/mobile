import { Factory } from 'fishery'
import { name, random } from 'faker'

import { ShabadData } from '../../src/types/data'

import { line } from './line'

export const shabad = Factory.define<ShabadData>( ( { sequence } ) => ( {
  id: `shabad-${sequence}`,
  source: {
    id: random.number( 10 ),
    length: random.number( 1500 ),
    nameGurmukhi: random.words( 3 ),
    pageNameGurmukhi: random.word(),
  },
  writer: {
    id: random.number( 10 ),
    nameGurmukhi: name.firstName(),
  },
  lines: line.buildList( 20 ),
} ) )
