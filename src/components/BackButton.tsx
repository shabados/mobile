import { HeaderBackButton, HeaderBackButtonProps } from '@react-navigation/elements'
import { useNavigation } from '@react-navigation/native'
import { StyleSheet } from 'react-native'

const styles = StyleSheet.create( {
  native: {
    marginLeft: -8,
  },
} )

export type BackButtonProps = HeaderBackButtonProps & {
  // To fix https://github.com/react-navigation/react-navigation/issues/10058
  // Native Stack Navigators + HeaderBackButton has funky margin otherwise
  native?: boolean,
}

const BackButton = ( { native = true, ...props }: BackButtonProps ) => {
  const navigation = useNavigation()

  return (
    <HeaderBackButton
      style={native && styles.native}
      {...props}
      onPress={() => navigation.goBack()}
    />
  )
}

export default BackButton
