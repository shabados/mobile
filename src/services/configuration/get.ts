import { from } from 'env-var'
import Config from 'react-native-config'

const env = from( Config )
const get = ( key: string ) => env.get( key )

export default get
