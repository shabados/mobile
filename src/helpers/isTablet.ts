import { Dimensions, Platform } from 'react-native'

const window = Dimensions.get( 'window' )
const { width, height } = window
const isTablet = ( Platform.OS === 'ios' && Platform.isPad ) || ( Platform.OS === 'android' && ( ( width >= 960 && height >= 720 ) || ( width >= 720 && height >= 960 ) ) )

export default isTablet
