import { fetchJson } from '../../../lib/fetch'
import { BaniListResponse, BaniResponse, SearchResponse, ShabadResponse } from './types'

const API_ROOT = 'https://api.gurbaninow.com/v2'

export const getShabad = ( id: string ) => fetchJson<ShabadResponse>( `${API_ROOT}/shabad/${id}` )

export const getBaniList = () => fetchJson<Array<BaniListResponse>>( `${API_ROOT}/banis/` )

export const getBani = ( id: string ) => fetchJson<BaniResponse>( `${API_ROOT}/banis/${id}` )

export const search = ( query: string, page = 0, size = 20 ) => {
  if ( !query ) return Promise.resolve( { count: 0, shabads: [] } as SearchResponse )

  return fetchJson<SearchResponse>( `${API_ROOT}/search/${query}/?searchtype=1&skip=${page * size}&results=${size}` )
}
