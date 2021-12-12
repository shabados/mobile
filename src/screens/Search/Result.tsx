import { toUnicode } from 'gurmukhi-utils'
import { Pressable, PressableProps, StyleSheet, View, ViewStyle } from 'react-native'

import Typography from '../../components/Typography'
import Colors from '../../themes/colors'
import Fonts from '../../themes/fonts'
import { px, py } from '../../themes/utils'

const styles = StyleSheet.create( {
  gurbani: {
    fontSize: 19.5,
    ...py( 4 ),
  },
  root: {
    ...px( 20 ),
    ...py( 12 ),
  },
  secondaryText: {
    color: Colors.SecondaryText,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headerGurmukhi: {
    fontSize: 14.5,
  },
  translation: {
    fontSize: 13,
    lineHeight: 14.875,
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

export type ResultProps = PressableProps & ResultDataProps & {
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
      <Typography style={[styles.secondaryText, styles.headerGurmukhi]}>{toUnicode( source )}</Typography>
      <Typography style={[styles.secondaryText, styles.headerGurmukhi]}>{toUnicode( page )}</Typography>
    </View>

    <Typography style={[ styles.text, styles.gurbani ]}>{toUnicode( gurmukhi )}</Typography>

    <Typography style={[
      styles.translation,
      styles.secondaryText ]}
    >
      {translation}

    </Typography>
  </Pressable>
)

export default Result
