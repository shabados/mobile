import { toUnicode } from 'gurmukhi-utils'
import { Pressable, PressableProps, StyleSheet, View, ViewStyle } from 'react-native'

import Typography from '../../components/Typography'
import Colors from '../../themes/colors'
import Fonts from '../../themes/fonts'
import { px, py } from '../../themes/utils'

const styles = StyleSheet.create( {
  gurbani: {
    fontFamily: Fonts.OpenGurbaniAkharBlack,
    fontSize: 16,
    paddingBottom: 0,
    color: Colors.PrimaryText,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  root: {
    ...px( 12 ),
    ...py( 12 ),
  },
  subText: {
    color: Colors.SecondaryText,
    fontSize: 14,
  },
  text: {
    ...py( 6 ),
  },
  translation: {
    ...py( 6 ),
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
      <Typography style={styles.subText}>{toUnicode( source )}</Typography>
      <Typography style={styles.subText}>{toUnicode( page )}</Typography>
    </View>

    <Typography style={[ styles.text, styles.gurbani ]}>{gurmukhi}</Typography>

    <Typography style={[ styles.subText, styles.translation ]}>{translation}</Typography>
  </Pressable>
)

export default Result
