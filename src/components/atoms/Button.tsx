import { ReactNode } from 'react'
import { Pressable, PressableProps, StyleSheet } from 'react-native'

import Typography, { TypographyProps } from '~/components/atoms/Typography'
import { Colors, px, units } from '~/themes'

const styles = StyleSheet.create( {
  filled: {
    backgroundColor: Colors.InputBox,
  },
  pressed: {
    opacity: 0.6,
  },
  root: {
    borderRadius: units.horizontalLayoutMargin / 2,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: units.minimumTouchDimension,
    minWidth: units.minimumTouchDimension,
  },
  text: {},
  typography: {
    ...px( 10 ),
  },
} )

type Variants = 'filled' | 'text'

export type ButtonProps = Omit<PressableProps, 'children'> & {
  typographyStyle?: TypographyProps['style'],
  variant?: Variants,
  children?: ReactNode,
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
