import { random } from 'faker'
import { Factory } from 'fishery'

import { CollectionData } from '../../src/types/data'

const collectionBase = Factory.define<CollectionData>( ( { sequence } ) => ( {
  id: `item-${sequence}`,
  nameGurmukhi: random.word(),
} ) )

export const collection = Factory.define<CollectionData>( () => ( {
  ...collectionBase.build(),
  ...( Math.random() > 0.5 && {
    items: collectionBase.buildList( 5 ),
  } ),
} ) )
