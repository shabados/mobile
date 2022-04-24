import { StyleProp, useWindowDimensions, ViewStyle } from 'react-native'

const useLandscape = () => {
  const { width, height } = useWindowDimensions()

  const isLandscape = width > height
  const landscapeStyle: StyleProp<ViewStyle> = isLandscape
    ? { marginLeft: width / 6, marginRight: width / 6 }
    : {}

  return { isLandscape, landscapeStyle }
}

export default useLandscape
