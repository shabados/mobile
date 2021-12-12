import { Pressable, PressableProps, StyleSheet, Text } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

import Typography from '../../components/Typography'
import Colors from '../../themes/colors'
import { px, py } from '../../themes/utils'

const styles = StyleSheet.create( {
  chevron: {
    color: Colors.PrimaryText,
  },
  container: {
    ...px( 20 ),
    ...py( 21 ),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 0.5,
    borderBottomColor: Colors.Separator,
  },
  title: {
    color: Colors.PrimaryText,
    fontSize: 19.5,
  },
} )

type CollectionItemProps = {
  title: string,
  icon?: string,
  onPress: () => void,
} & PressableProps

const CollectionItem = ( { title, icon, onPress, ...props }: CollectionItemProps ) => (
  <Pressable style={styles.container} onPress={onPress} {...props}>
    <Typography style={styles.title}>{title}</Typography>
    {icon && <Icon style={styles.chevron} name={icon} size={25} />}
  </Pressable>
)

export default CollectionItem
