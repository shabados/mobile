export class MMKV {
  store = {} as Record<string, unknown>

  set( key: string, value: unknown ) {
    this.store = ( { ...this.store, [ key ]: value } )
  }

  getString( key: string ) {
    return this.store[ key ]
  }

  contains( key: string ) {
    return this.getString( key ) !== undefined
  }
}
