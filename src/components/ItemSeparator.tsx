import { StyleSheet, View } from 'react-native'

import OS from '../helpers/os'
import Colors from '../themes/colors'
import Units from '../themes/units'

const styles = StyleSheet.create( {
  full: {
    marginLeft: 0,
  },
  root: {
    height: Units.Separator,
    backgroundColor: Colors.Separator,
    marginLeft: Units.HorizontalLayoutMargin,
  },
} )

type ItemSeparatorProps = {
  full?: boolean,
}

const ItemSeparator = ( { full = OS.android }: ItemSeparatorProps ) => (
  <View style={[ styles.root, full && styles.full ]} />
)

export default ItemSeparator
