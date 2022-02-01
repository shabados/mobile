import { faker } from '@faker-js/faker'
import { Factory } from 'fishery'

import { BookmarkData } from '../../src/types/data'
import { line } from './line'

export const bookmark = Factory.define<BookmarkData>( ( { sequence } ) => ( {
  id: `bookmark-${sequence}`,
  nameGurmukhi: faker.random.word(),
  source: {
    id: faker.datatype.number( 10 ),
    length: faker.datatype.number( 1500 ),
    nameGurmukhi: faker.random.words( 3 ),
    pageNameGurmukhi: faker.random.word(),
  },
  writer: {
    id: faker.datatype.number( 10 ),
    nameGurmukhi: faker.name.firstName(),
  },
  lines: line.buildList( 20 ),
} ) )
