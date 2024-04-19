import { useQuery } from '@tanstack/react-query'

import { CollectionItem } from '~/types/data'

import defaultCollections from './default'

export const getCollections = () => Promise.resolve( defaultCollections() )

const getCollectionAt = ( collection: CollectionItem, path: string[] ) => path
  .filter( ( x ) => x )
  .reduce( ( acc, segment ) => {
    if ( acc?.type !== 'folder' ) throw new Error( 'Invalid path' )

    return ( acc )
      .items
      .find( ( { id } ) => id === segment )!
  }, collection )

export const useCollection = ( path: string[] = [] ) => useQuery( {
  queryKey: [ 'collections' ],
  queryFn: getCollections,
  select: ( items ) => getCollectionAt( { name: '', items, type: 'folder' } as CollectionItem, path ),
} )
