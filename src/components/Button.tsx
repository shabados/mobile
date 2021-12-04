import { Pressable, PressableProps, StyleSheet, ViewProps } from 'react-native'

import Colors from '../themes/colors'
import { mx } from '../themes/utils'

import Typography from './Typography'

const styles = StyleSheet.create( {
  filled: {
    backgroundColor: Colors.InputBox,
  },
  pressed: {
    opacity: 0.6,
  },
  root: {
    borderRadius: 10,
    width: 75,
    ...mx( 10 ),
    height: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {},
} )

type Variants = 'filled' | 'text'

export type ButtonProps = PressableProps & {
  style?: ViewProps,
  /**
   * The type of typography to render.
   */
  variant?: Variants,
}

/**
 * Themed button component, pressable.
 */
const Button = ( {
  variant = 'filled',
  style,
  children,
  ...props
}: ButtonProps ) => (
  <Pressable
    style={( { pressed } ) => [ styles.root, styles[ variant ], pressed && styles.pressed, style ]}
    {...props}
  >
    <Typography variant="button">
      {children}
    </Typography>
  </Pressable>
)

export default Button
