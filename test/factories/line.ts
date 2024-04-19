import { faker } from '@faker-js/faker'
import { Factory } from 'fishery'

import { languages } from '~/helpers/languages'
import getArrayElement from '~/test/utils/get-array-element'
import { LineData } from '~/types/data'

import * as data from './data'

export const line = Factory.define<LineData>( ( { sequence } ) => ( {
  id: faker.string.uuid(),
  gurmukhi: getArrayElement( data.gurmukhiLines, sequence ),
  translations: [ {
    translation: faker.word.words( 10 ),
    translationSourceId: languages.english,
  } ],
  sourcePage: Math.floor( sequence / 10 ) + 1,
  sourceLine: sequence % 10,
} ) )
