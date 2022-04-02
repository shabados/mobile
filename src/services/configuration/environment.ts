import get from './get'

const LOCAL_ENV = 'local'
const LOCAL_ENVIRONMENTS = [ LOCAL_ENV, 'test' ]

const name = get( 'ENV_NAME' ).default( LOCAL_ENV ).asString()

const environment = {
  name,
  isLocal: LOCAL_ENVIRONMENTS.includes( name ),
}

export default environment
