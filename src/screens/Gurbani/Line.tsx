import { toUnicode } from 'gurmukhi-utils'
import React from 'react'
import { StyleSheet, View } from 'react-native'

import Languages from '../../lib/languages'
import transliterators from '../../lib/transliterators'
import Fonts from '../../themes/fonts'
import { px, py } from '../../themes/utils'
import Typography from '../../components/Typography'
import { TranslationData } from '../../types/Data'

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

const styles = StyleSheet.create( {
  gurbani: {
    fontFamily: Fonts.OpenGurbaniAkharBlack,
    fontSize: 18,
    ...py( 0 ),
  },
  root: {
    ...px( 10 ),
    ...py( 7 ),
  },
  text: {
    ...py( 2 ),
  },
} )

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

    {translations.filter( ( { translationSourceId } ) => translationSourceId === 1 ).map( ( {
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
