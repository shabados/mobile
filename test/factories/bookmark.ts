import { Factory } from 'fishery'
import { name, random } from 'faker'

import { BookmarkData } from '../../src/types/data'

import { line } from './line'

export const bookmark = Factory.define<BookmarkData>( ( { sequence } ) => ( {
  id: `bookmark-${sequence}`,
  nameGurmukhi: random.word(),
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
