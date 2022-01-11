import get from './get'

const LOCAL_ENV = 'local'
const name = get( 'ENV_NAME' ).default( LOCAL_ENV ).asString()

const environment = {
  name,
  isLocal: name === LOCAL_ENV,
}

export default environment
