import { StyleProp, useWindowDimensions, ViewStyle } from 'react-native'

const useLandscape = () => {
  const { width, height } = useWindowDimensions()

  const isLandscape = width > height
  const landscapeStyle: StyleProp<ViewStyle> = isLandscape
    ? { marginLeft: height / 2, marginRight: height / 2 }
    : {}

  return { isLandscape, landscapeStyle }
}

export default useLandscape
