import React from 'react'
import { toUnicode } from 'gurmukhi-utils'
import { StyleSheet, View } from 'react-native'

import { TranslationData } from '../../types/data'
import Languages from '../../lib/languages'
import transliterators from '../../lib/transliterators'
import Colors from '../../themes/colors'
import Fonts from '../../themes/fonts'
import { px, py } from '../../themes/utils'
import Typography from '../../components/Typography'

const styles = StyleSheet.create( {
  gurbani: {
    color: Colors.PrimaryText,
    fontFamily: Fonts.OpenGurbaniAkharBlack,
    fontSize: 16,
    lineHeight: 24,
  },
  root: {
    ...px( 12 ),
    ...py( 12 ),
  },
  text: {
    color: Colors.SecondaryText,
    fontSize: 14,
    lineHeight: 24,
    paddingTop: 6,
  },
} )

export type LineProps = {
  /**
   * Gurmukhi line, in ASCII Gurmukhi form.
   */
  gurmukhi: string,
  /**
   * Translations, with accompanying languages.
   */
  translations: TranslationData[],
  /**
   * Languages for which transliterations will be generated.
   */
  transliterations: ( Languages.English | Languages.Hindi | Languages.Urdu )[],
}

/**
 * Renders the Gurmukhi, any translations, and transliterates the Gurmukhi.
 */
const Line = ( {
  gurmukhi,
  translations,
  transliterations,
}: LineProps ) => (
  <View style={styles.root}>
    <Typography style={[ styles.text, styles.gurbani ]}>{gurmukhi}</Typography>

    {translations
      .filter( ( { translationSourceId } ) => translationSourceId === Languages.English )
      .map( ( {
        translationSourceId,
        translation,
      } ) => <Typography key={translationSourceId} style={styles.text}>{translation}</Typography> )}

    {transliterations.map( ( language ) => (
      <Typography
        key={language}
        style={styles.text}
      >
        {transliterators[ language ]( toUnicode( gurmukhi ) )}
      </Typography>
    ) )}
  </View>
)

export default Line
