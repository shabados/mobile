import {
  addOrientationChangeListener,
  getOrientationAsync,
  Orientation,
  removeOrientationChangeListener,
} from 'expo-screen-orientation'
import { useEffect, useState } from 'react'

const initialOrientation = getOrientationAsync()

const useOrientation = () => {
  const [ orientation, setOrientation ] = useState( Orientation.UNKNOWN )

  useEffect( () => void initialOrientation.then( setOrientation ), [] )

  useEffect( () => {
    const listener = addOrientationChangeListener(
      ( { orientationInfo } ) => setOrientation( orientationInfo.orientation )
    )

    return () => removeOrientationChangeListener( listener )
  }, [] )

  return {
    orientation,
    isLandscape: [
      Orientation.LANDSCAPE_LEFT,
      Orientation.LANDSCAPE_RIGHT,
    ].includes( orientation ),
    isPortrait: [
      Orientation.PORTRAIT_UP,
      Orientation.PORTRAIT_DOWN,
    ].includes( orientation ),
  }
}

export default useOrientation
