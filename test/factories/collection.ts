import { faker } from '@faker-js/faker'
import { Factory } from 'fishery'

import { CollectionAng, CollectionBani, CollectionFolder, CollectionItem, CollectionPresetFolder, CollectionShabad, CollectionUserFolder } from '~/types/data'

export const collectionBani = Factory.define<CollectionBani>( ( { sequence } ) => ( {
  id: `bani-item-${sequence}`,
  type: 'bani',
  nameGurmukhi: faker.word.words(),
} ) )

export const collectionShabad = Factory.define <CollectionShabad>( ( { sequence } ) => ( {
  id: `shabad-item-${sequence}`,
  type: 'shabad',
  lineId: `line-${sequence}`,
} ) )

export const collectionAng = Factory.define<CollectionAng>( ( { sequence } ) => ( {
  id: `ang-item-${sequence}`,
  type: 'ang',
  lineId: faker.string.uuid(),
} ) )

export const collectionUserFolder = Factory.define<CollectionUserFolder>( ( { sequence } ) => ( {
  id: `user-folder-${sequence}`,
  type: 'folder',
  origin: 'user',
  name: faker.word.words(),
  items: faker.helpers.arrayElements( [
    ...collectionBani.buildList( 5 ),
    ...collectionShabad.buildList( 5 ),
    ...collectionAng.buildList( 5 ),
  ] ),
} ) )

export const collectionPresetFolder = Factory.define<CollectionPresetFolder>( ( {
  sequence,
} ) => ( {
  id: `preset-folder-${sequence}`,
  type: 'folder',
  origin: 'preset',
  nameGurmukhi: faker.word.words(),
  items: faker.helpers.arrayElements( [
    ...collectionBani.buildList( 5 ),
    ...collectionShabad.buildList( 5 ),
  ] ),
} ) )

export const collectionFolder = Factory.define<CollectionFolder>( () => ( {
  ...faker.helpers.arrayElement( [
    collectionPresetFolder.build(),
    collectionUserFolder.build(),
  ] ),
} ) )

export const collectionItem = Factory.define<CollectionItem>( () => ( {
  ...faker.helpers.arrayElement( [
    collectionBani.build(),
    collectionShabad.build(),
    collectionAng.build(),
    collectionFolder.build(),
  ] ),
} ) )
