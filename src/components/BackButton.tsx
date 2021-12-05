import { useNavigation } from '@react-navigation/native'
import { StyleSheet, Text } from 'react-native'

import Colors from '../themes/colors'
import Button, { ButtonProps } from './Button'

export type BackButtonProps = {
  /**
   * Value back button should display
   */
  label?: string | JSX.Element,
} & ButtonProps

const styles = StyleSheet.create( {
  label: {
    color: Colors.PrimaryText,
    fontSize: 16,
  },
} )

/**
 * Button to navigate to previous page.
 */
const BackButton = ( { label = 'Cancel', ...props }: BackButtonProps ) => {
  const navigation = useNavigation()

  const goBack = () => navigation.goBack()

  return (
    <Button onPress={goBack} {...props}>
      {typeof label === 'string' ? <Text style={styles.label}>{label}</Text> : label}
    </Button>
  )
}

export default BackButton
