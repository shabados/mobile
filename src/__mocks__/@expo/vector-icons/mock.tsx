import MaterialIcon from '@expo/vector-icons/MaterialIcons'
import { ComponentProps } from 'react'
import { Text } from 'react-native'

const Icon = ( { name, testID }: ComponentProps<typeof MaterialIcon> ) => (
  <Text testID={testID}>
    {name}
  </Text>
)

export default Icon
