import { getAndroidId, getIosIdForVendorAsync } from 'expo-application'
import { Platform } from 'react-native'

export const getVendorId = async () => {
  const id = Platform.select( {
    ios: await getIosIdForVendorAsync(),
    android: getAndroidId(),
  } )

  if ( !id ) throw new Error( 'Could not get device id' )

  return id
}
