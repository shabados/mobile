/* eslint-disable no-undef */
export const fetchJson = <Response extends unknown>(
  ...params: Parameters<typeof fetch>
) => fetch( ...params )
    .then( ( response ) => {
      if ( response.ok ) return response.json() as Response

      return Promise.reject( response )
    } )
