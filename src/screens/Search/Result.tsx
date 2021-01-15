import { toUnicode } from 'gurmukhi-utils'
import React from 'react'
import { StyleSheet, View, Pressable, PressableProps, ViewStyle } from 'react-native'

import Typography from '../../components/Typography'
import Fonts from '../../themes/fonts'
import { px, py } from '../../themes/utils'

const styles = StyleSheet.create( {
  gurbani: {
    fontFamily: Fonts.OpenGurbaniAkharBlack,
    fontSize: 18,
    paddingBottom: 0,
    color: '#EDEDED',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  root: {
    ...px( 10 ),
    ...py( 7 ),
  },
  subText: {
    color: '#BCBCBC',
  },
  text: {
    ...py( 10 ),
  },
  translation: {
    ...py( 5 ),
    fontSize: 12,
  },
} )

export type ResultDataProps = {
  /**
   * Name of gurbani source
   */
  source: string,
  /**
   * Page number in source
   */
  page: number,
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

const getShortDate = ( date?: string ) => ( date
  ? new Date( date ).toLocaleDateString( 'en', { month: 'short', day: 'numeric' } )
  : '' )

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
      <Typography style={styles.subText}>{toUnicode( `AMg ${page}` )}</Typography>
      <Typography style={styles.subText}>{getShortDate( lastViewedAt )}</Typography>
    </View>

    <Typography style={[ styles.text, styles.gurbani ]}>{gurmukhi}</Typography>

    <Typography style={[ styles.subText, styles.translation ]}>{translation}</Typography>
  </Pressable>
)

export default Result
