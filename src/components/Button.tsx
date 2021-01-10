import React from 'react'
import { Pressable, PressableProps, StyleSheet, ViewProps } from 'react-native'

import Colours from '../themes/colours'
import { mx } from '../themes/utils'

import Typograpy from './Typography'

const styles = StyleSheet.create( {
  pressed: {
    opacity: 0.6,
  },
  root: {
    borderRadius: 10,
    backgroundColor: Colours.LightGray,
    width: 75,
    ...mx( 10 ),
    height: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
} )

export type ButtonProps = PressableProps & { style?: ViewProps }

/**
 * Themed button component, pressable.
 */
const Button = ( { style, children, ...props }: ButtonProps ) => (
  <Pressable
    style={( { pressed } ) => [ styles.root, pressed && styles.pressed, style ]}
    {...props}
  >
    <Typograpy variant="button">
      {children}
    </Typograpy>
  </Pressable>
)

export default Button
