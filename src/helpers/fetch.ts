/* eslint-disable no-undef */
export const fetchJson = <Response>(
  ...params: Parameters<typeof fetch>
) => fetch( ...params )
    .then( ( response ) => {
      if ( response.ok ) return response.json() as Promise<Response>

      return Promise.reject( response )
    } )
