import { Pressable, PressableProps, StyleProp, StyleSheet, ViewProps, ViewStyle } from 'react-native'

import Colors from '../themes/colors'
import Units from '../themes/units'
import {  px } from '../themes/utils'
import Typography, { TypographyProps } from './Typography'

const styles = StyleSheet.create( {
  filled: {
    backgroundColor: Colors.InputBox,
  },
  pressed: {
    opacity: 0.6,
  },
  root: {
    borderRadius: Units.HorizontalLayoutMargin / 2,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: Units.MinimumTouchDimension,
    minWidth: Units.MinimumTouchDimension,
  },
  text: {},
  typography: {
    ...px( 10 ),
  },
} )

type Variants = 'filled' | 'text'

export type ButtonProps = PressableProps & {
  typographyStyle?: TypographyProps['style'],
  variant?: Variants,
}

const Button = ( {
  variant = 'filled',
  style,
  typographyStyle,
  children,
  ...props
}: ButtonProps ) => (
  <Pressable
    style={( { pressed } ) => [ styles.root, styles[ variant ], pressed && styles.pressed, style ]}
    {...props}
  >
    <Typography variant="button" style={[ styles.typography, typographyStyle ]}>
      {children}
    </Typography>
  </Pressable>
)

export default Button
