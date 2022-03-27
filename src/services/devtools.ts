/* eslint-disable import/no-extraneous-dependencies */
import storage from './mmkv-storage'

export const initialize = () => {
  if ( !__DEV__ ) return

  console.log( '[devtools] initializing' )

  void import( 'react-native-mmkv-flipper-plugin' )
    .then( ( { initializeMMKVFlipper } ) => {
      initializeMMKVFlipper( { default: storage } )
      console.log( '[devtools] initialized mmkv flipper plugin' )
    } )
}
