import { renderHook } from '@testing-library/react-hooks'
import reactNative from 'react-native'

import useLandscape from './use-landscape'

const LONGER_EDGE = 700
const SHORTER_EDGE = 300

const setup = ( isLandscape: boolean ) => {
  jest
    .spyOn( reactNative, 'useWindowDimensions' )
    .mockReturnValue( {
      fontScale: 1,
      scale: 1,
      height: isLandscape ? SHORTER_EDGE : LONGER_EDGE,
      width: isLandscape ? LONGER_EDGE : SHORTER_EDGE,
    } )

  return renderHook( () => useLandscape() )
}

describe( 'useLandscape()', () => {
  describe( 'given the device is in landscape', () => {
    it( 'should return isLandscape as true', () => {
      const { result: { current } } = setup( true )

      expect( current.isLandscape ).toBe( true )
    } )

    it( 'should return landscape styles', () => {
      const { result: { current } } = setup( true )

      expect( current.landscapeStyle ).toMatchObject( {
        marginRight: LONGER_EDGE / 6,
        marginLeft: LONGER_EDGE / 6,
      } )
    } )
  } )
} )
