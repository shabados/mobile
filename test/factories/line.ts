import { faker } from '@faker-js/faker'
import { Factory } from 'fishery'

import Languages from '../../src/helpers/languages'
import { LineData } from '../../src/types/data'
import getArrayElement from '../utils/get-array-element'
import * as data from './data'

export const line = Factory.define<LineData>( ( { sequence } ) => ( {
  id: faker.datatype.uuid(),
  gurmukhi: getArrayElement( data.gurmukhiLines, sequence ),
  translations: [ {
    translation: faker.random.words( 10 ),
    translationSourceId: Languages.English,
  } ],
  sourcePage: Math.floor( sequence / 10 ) + 1,
  sourceLine: sequence % 10,
} ) )
