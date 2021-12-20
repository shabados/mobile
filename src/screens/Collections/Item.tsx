import { Pressable, PressableProps, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

import Typography from '../../components/Typography'
import OS from '../../helpers/os'
import Colors from '../../themes/colors'
import Fonts from '../../themes/fonts'
import Units from '../../themes/units'
import { px } from '../../themes/utils'

const styles = StyleSheet.create( {
  chevron: {
    color: Colors.PrimaryText,
  },
  container: {
    ...px( Units.HorizontalLayoutMargin ),
    minHeight: Units.MinimumTouchDimension * Units.ThumbFingerRatio,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: Units.Separator,
    borderBottomColor: Colors.Separator,
  },
  title: {
    color: Colors.PrimaryText,
    fontSize: Units.Base * Units.GurmukhiLatinRatio,
    lineHeight: Units.Base * Units.GurmukhiLineHeightMultiplier,
    ...( OS.android && { fontFamily: Fonts.MuktaMahee } ),
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
    {icon && <Icon style={styles.chevron} name={icon} size={Units.Title1} />}
  </Pressable>
)

export default CollectionItem
