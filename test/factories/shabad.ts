import { faker } from '@faker-js/faker'
import { Factory } from 'fishery'

import { ShabadData } from '~/types/data'

import { line } from './line'

export const shabad = Factory.define<ShabadData>( ( { sequence } ) => ( {
  id: `shabad-${sequence}`,
  source: {
    id: faker.number.int( 10 ),
    length: faker.number.int( 1500 ),
    nameGurmukhi: faker.word.words( 3 ),
    pageNameGurmukhi: faker.word.words(),
  },
  writer: {
    id: faker.number.int( 10 ),
    nameGurmukhi: faker.person.firstName(),
  },
  lines: line.buildList( 10 ),
} ) )
