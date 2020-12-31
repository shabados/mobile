import data from './mock/sggs-first-shabad.json'

type Shabad = typeof data

export const getShabad = ( _id: string ) => new Promise<Shabad>( ( resolve ) => setTimeout(
  () => resolve( data ),
  50,
) )
