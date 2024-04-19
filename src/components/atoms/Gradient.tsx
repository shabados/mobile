import { LinearGradient, LinearGradientProps } from 'expo-linear-gradient'
import { useColorScheme } from 'react-native'
import type { Merge } from 'type-fest'

type GradientColor = {
  light: string[],
  dark: string[],
}

export const gradientColors = {
  transparentToBackground: {
    light: [ 'rgba(255, 255, 255, 0)', 'rgba(255, 255, 255, 1)' ],
    dark: [ 'rgba(0, 0, 0, 0)', 'rgba(0, 0, 0, 1)' ],
  },
} satisfies Record<string, GradientColor>

type GradientColors = keyof typeof gradientColors

type GradientProps = Merge<LinearGradientProps, {
  colors: GradientColors,
}>

const Gradient = ( { colors }: GradientProps ) => {
  const scheme = useColorScheme() ?? 'light'

  return (
    <LinearGradient colors={gradientColors[ colors ][ scheme ]} />
  )
}

export default Gradient
