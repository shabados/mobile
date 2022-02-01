import { faker } from '@faker-js/faker'
import { Factory } from 'fishery'

import { LineData } from '../../src/types/data'
import * as data from './data'

export const line = Factory.define<LineData>( ( { sequence } ) => ( {
  id: faker.datatype.uuid(),
  gurmukhi: data.randomGurmukhi(),
  translations: [ {
    translation: faker.random.words( 10 ),
    translationSourceId: faker.datatype.number(),
  } ],
  sourcePage: Math.floor( sequence / 10 ) + 1,
  sourceLine: sequence % 10,
} ) )
