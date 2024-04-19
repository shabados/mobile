import ky from 'ky'

import { createLogger } from '~/services/logger'

const log = createLogger( 'http' )

const formatRequest = ( request: Request ) => `[${request.method}] ${request.url}`

const http = ky.create( {
  hooks: {
    beforeRequest: [
      ( request ) => {
        log.debug(
          formatRequest( request ),
          { headers: request.headers, body: request.body }
        )
      },
    ],
    beforeError: [
      ( error ) => {
        const { response, request, message } = error

        log.error( formatRequest( error.request ), {
          request: { headers: request.headers, body: request.body },
          response: {
            status: response?.status,
            statusText: response?.statusText,
            body: response?.body,
          },
          message,
        } )

        return error
      },
    ],
  },
} )

export default http
