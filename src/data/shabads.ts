import { LineData } from '../types/data'

import data from './mock/sggs-first-shabad.json'

export const getShabad = ( _id: string ) => new Promise<LineData[]>( ( resolve ) => setTimeout(
  () => resolve( data ),
  50,
) )
