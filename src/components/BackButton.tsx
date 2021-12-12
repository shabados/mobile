import { useNavigation } from '@react-navigation/native'
import { StyleSheet, Text } from 'react-native'

import Colors from '../themes/colors'
import Button, { ButtonProps } from './Button'
import Typography from './Typography'

export type BackButtonProps = {
  /**
   * Value back button should display
   */
  label?: string | JSX.Element,
} & ButtonProps

const styles = StyleSheet.create( {
  label: {
    color: Colors.PrimaryText,
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
      {typeof label === 'string' ? <Typography style={styles.label}>{label}</Typography> : label}
    </Button>
  )
}

export default BackButton
