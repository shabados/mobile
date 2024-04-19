import { StyleSheet, View } from 'react-native'

import { os } from '~/helpers/os'
import { Colors, units } from '~/themes'

const styles = StyleSheet.create( {
  full: {
    marginLeft: 0,
  },
  root: {
    height: units.separator,
    backgroundColor: Colors.Separator,
    marginLeft: units.horizontalLayoutMargin,
  },
} )

type ItemSeparatorProps = {
  full?: boolean,
}

const ItemSeparator = ( { full = os === 'android' }: ItemSeparatorProps ) => (
  <View style={[ styles.root, full && styles.full ]} />
)

export default ItemSeparator
