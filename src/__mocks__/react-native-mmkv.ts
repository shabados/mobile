export class MMKV {
  store = {} as { [key: string] : any }

  set( key: string, value: any ) {
    this.store = ( { ...this.store, [ key ]: value } )
  }

  getString( key: string ) {
    return this.store[ key ]
  }

  contains( key: string ) {
    return this.getString( key ) !== undefined
  }
}
