import { MMKV } from 'react-native-mmkv'

class JsonMMKV extends MMKV {
  getJSON<Data>( key: string ) {
    return JSON.parse( this.getString( key ) ?? 'null' ) as Data | null
  }

  set( key: string, data: string | number | boolean | object ) {
    super.set( key, typeof data === 'object' ? JSON.stringify( data ) : data )
  }
}

const storage = new JsonMMKV()

export default storage
