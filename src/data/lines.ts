import { LineData } from '../types/data'

import data from './mock/sggs-first-shabad.json'

export const search = ( _query: string ) => new Promise<LineData[]>( ( resolve ) => setTimeout(
  () => resolve( data ),
  50,
) )
