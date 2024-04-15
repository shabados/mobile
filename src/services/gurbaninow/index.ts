import ky from 'ky'

import { BaniListResponse, BaniResponse, SearchResponse, ShabadResponse } from './types'

const API_ROOT = 'https://api.gurbaninow.com/v2'

export const getShabad = ( id: string ) => ky.get( `${API_ROOT}/shabad/${id}` ).json<ShabadResponse>()

export const getBaniList = () => ky.get( `${API_ROOT}/banis/` ).json<BaniListResponse>()

export const getBani = ( id: string ) => ky.get( `${API_ROOT}/banis/${id}` ).json<BaniResponse>()

export const search = ( query: string, page = 0, size = 20 ) => {
  if ( !query ) return Promise.resolve( { count: 0, shabads: [] } as SearchResponse )

  return ky.get( `${API_ROOT}/search/${query}/?searchtype=1&skip=${page * size}&results=${size}` ).json<SearchResponse>()
}
