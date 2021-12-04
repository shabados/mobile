import { Pressable, PressableProps, StyleSheet, Text } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

import Colors from '../../themes/colors'
import { py } from '../../themes/utils'

const styles = StyleSheet.create( {
  chevron: {
    color: Colors.PrimaryText,
  },
  container: {
    ...py( 21 ),
    paddingLeft: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 0.5,
    borderBottomColor: Colors.Separator,
  },
  title: {
    color: Colors.PrimaryText,
    fontSize: 14,
  },
} )

type CollectionItemProps = {
  title: string,
  icon?: string,
  onPress: () => void,
} & PressableProps

const CollectionItem = ( { title, icon, onPress, ...props }: CollectionItemProps ) => (
  <Pressable style={styles.container} onPress={onPress} {...props}>
    <Text style={styles.title}>{title}</Text>
    {icon && <Icon style={styles.chevron} name={icon} size={25} />}
  </Pressable>
)

export default CollectionItem
