import Icon from '@expo/vector-icons/MaterialCommunityIcons'
import { ComponentProps } from 'react'
import { Pressable, PressableProps, StyleSheet } from 'react-native'

import Typography from '~/components/atoms/Typography'
import { Colors, fonts, px, units } from '~/themes'

const styles = StyleSheet.create( {
  chevron: {
    color: Colors.PrimaryText,
  },
  container: {
    ...px( units.horizontalLayoutMargin ),
    minHeight: units.minimumTouchDimension * units.thumbFingerRatio,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    color: Colors.PrimaryText,
    fontFamily: fonts.SantLipiMedium,
    fontSize: units.base * units.gurmukhiLatinRatio,
    lineHeight: units.base * units.gurmukhiLineHeightMultiplier,
  },
} )

type CollectionItemProps = {
  title: string,
  icon?: ComponentProps<typeof Icon>['name'],
  onPress: () => void,
} & PressableProps

const CollectionItem = ( { title, icon, onPress, ...props }: CollectionItemProps ) => (
  <Pressable style={styles.container} onPress={onPress} {...props}>
    <Typography style={styles.title}>{title}</Typography>
    {icon && <Icon style={styles.chevron} name={icon} size={units.title1} />}
  </Pressable>
)

export default CollectionItem
