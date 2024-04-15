import { HeaderBackButton, HeaderBackButtonProps } from '@react-navigation/elements'
import { useRouter } from 'expo-router'
import { StyleSheet } from 'react-native'

const styles = StyleSheet.create( {
  root: {
    marginLeft: -8,
  },
} )

export type BackButtonProps = HeaderBackButtonProps

const BackButton = ( props: BackButtonProps ) => {
  const router = useRouter()

  return (
    <HeaderBackButton
      style={styles.root}
      {...props}
      onPress={() => router.back()}

    />
  )
}

export default BackButton
