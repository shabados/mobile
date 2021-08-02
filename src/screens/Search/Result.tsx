import { toUnicode } from 'gurmukhi-utils'
import React from 'react'
import { StyleSheet, View, Pressable, PressableProps, ViewStyle } from 'react-native'

import Typography from '../../components/Typography'
import Colors from '../../themes/colors'
import Fonts from '../../themes/fonts'
import { px, py } from '../../themes/utils'

const styles = StyleSheet.create( {
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  root: {
    ...px( 12 ),
    ...py( 12 ),
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
      <Typography font="gurmukhi" variant="caption">{toUnicode( source )}</Typography>
      <Typography font="gurmukhi" variant="caption">{toUnicode( page )}</Typography>
    </View>

    <Typography font="gurmukhi" variant="header">{toUnicode( gurmukhi )}</Typography>

    <Typography variant="caption">{translation}</Typography>
  </Pressable>
)

export default Result
