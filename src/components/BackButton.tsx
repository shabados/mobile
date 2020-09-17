import React from 'react'
import { Text, StyleSheet, TouchableOpacityProps } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { TouchableOpacity } from 'react-native-gesture-handler'

type BackButtonProps = {
  /**
   * Value back button should display
   */
  label?: string,
} & Omit<TouchableOpacityProps, 'onPress' | 'children'>

const styles = StyleSheet.create( {
  label: {
    color: 'rgb(47,124,246)',
    fontSize: 16,
  },
} )

const BackButton = ( { label = 'Cancel', ...props }: BackButtonProps ) => {
  const navigation = useNavigation()

  const goBack = () => navigation.goBack()

  return (
    <TouchableOpacity onPress={goBack} {...props}>
      <Text style={styles.label}>{label}</Text>
    </TouchableOpacity>
  )
}

export default BackButton
