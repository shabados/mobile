import React from 'react'
import { Text, StyleSheet, TouchableOpacityProps } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { TouchableOpacity } from 'react-native-gesture-handler'

import Colours from '../themes/colours'

export type BackButtonProps = {
  /**
   * Value back button should display
   */
  label?: string | JSX.Element,
} & Omit<TouchableOpacityProps, 'onPress' | 'children'>

const styles = StyleSheet.create( {
  label: {
    color: Colours.Blue,
    fontSize: 16,
  },
} )

const BackButton = ( { label = 'Cancel', ...props }: BackButtonProps ) => {
  const navigation = useNavigation()

  const goBack = () => navigation.goBack()

  return (
    <TouchableOpacity onPress={goBack} {...props}>
      {typeof label === 'string' ? <Text style={styles.label}>{label}</Text> : label}
    </TouchableOpacity>
  )
}

export default BackButton
