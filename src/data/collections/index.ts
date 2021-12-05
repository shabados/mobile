import { CollectionData } from '../../types/data'
import defaultCollections from './default'

export const getCollections = (): Promise<CollectionData[]> => Promise.resolve( defaultCollections )
