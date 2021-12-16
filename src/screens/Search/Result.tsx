import { toUnicode } from 'gurmukhi-utils'
import {
  Pressable,
  PressableProps,
  StyleSheet,
  View,
  ViewStyle,
} from 'react-native'

import { OS } from '../../../build/src/lib/consts'
import Typography from '../../components/Typography'
import Colors from '../../themes/colors'
import Units from '../../themes/units'
import { px, py } from '../../themes/utils'

const styles = StyleSheet.create( {
  gurbani: {
    fontSize: Units.Base * Units.GurmukhiLatinRatio,
    ...( OS.android && { paddingBottom: 6 } ),
    ...( OS.ios && { paddingBottom: 2.5 } ),
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headerGurmukhi: {
    fontSize: Units.Footnote * Units.GurmukhiLatinRatio,
  },
  root: {
    ...px( Units.HorizontalLayoutMargin ),
    ...py( ( Units.Base * Units.LineHeightMultiplier ) / 2 ),
  },
  secondaryText: {
    color: Colors.SecondaryText,
  },
  translation: {
    fontSize: Units.Footnote,
    lineHeight: ( Units.Base * Units.LineHeightMultiplier ) / 2,
  },
} )

export type ResultDataProps = {
  /**
   * Name of gurbani source.
   */
  source: string,
  /**
   * Page string including page name.
   */
  page: string,
  /**
   * Last accessed date
   */
  lastViewedAt?: string,
  /**
   * Gurmukhi line, in ASCII Gurmukhi form.
   */
  gurmukhi: string,
  /**
   * Translation for gurbani line.
   */
  translation: string,
}

export type ResultProps = PressableProps &
ResultDataProps & {
  /**
     * Style for `View` container
     */
  style?: ViewStyle,
}

const Result = ( {
  style,
  source,
  page,
  lastViewedAt,
  gurmukhi,
  translation,
  ...props
}: ResultProps ) => (
  <Pressable style={[ styles.root, style ]} {...props}>
    <View style={styles.header}>
      <Typography style={[ styles.secondaryText, styles.headerGurmukhi ]}>
        {toUnicode( source )}
      </Typography>
      <Typography style={[ styles.secondaryText, styles.headerGurmukhi ]}>
        {toUnicode( page )}
      </Typography>
    </View>

    <Typography style={[ styles.gurbani ]}>{toUnicode( gurmukhi )}</Typography>

    <Typography style={[ styles.translation, styles.secondaryText ]}>
      {translation}
    </Typography>
  </Pressable>
)

export default Result
