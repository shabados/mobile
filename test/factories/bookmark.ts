import { Factory } from 'fishery'
import { name, random } from 'faker'

import { BookmarkData, BookmarkLinesData } from '../../src/types/data'

import { line } from './line'

const bookmarkItemBase = Factory.define<BookmarkData>( ( { sequence } ) => ( {
  id: `item-${sequence}`,
  nameGurmukhi: random.word(),
} ) )

export const bookmarkDataToItems = ( data: BookmarkData[] ): BookmarkData['items'] => data.reduce( ( acc, { nameGurmukhi, ...rest } ) => ( {
  ...acc,
  [ nameGurmukhi ]: { nameGurmukhi, ...rest },
} ), {} )

export const bookmarkItem = Factory.define<BookmarkData>( () => ( {
  ...bookmarkItemBase.build(),
  ...( Math.random() > 0.5 && {
    items: bookmarkDataToItems( bookmarkItemBase.buildList( 5 ) ),
  } ),
} ) )

// Should be renamed, as this is more of a collection
export const bookmark = Factory.define<BookmarkLinesData>( ( { sequence } ) => ( {
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
