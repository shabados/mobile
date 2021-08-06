import React from 'react'
import { toUnicode } from 'gurmukhi-utils'
import { StyleSheet, View } from 'react-native'

import { TranslationData } from '../../types/data'
import Languages from '../../lib/languages'
import transliterators from '../../lib/transliterators'
import Colors from '../../themes/colors'
import { px, py } from '../../themes/utils'
import Typography from '../../components/Typography'

const styles = StyleSheet.create( {
  root: {
    ...px( 12 ),
    ...py( 12 ),
  },
  supportingText: {
    color: Colors.SecondaryText,
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
    <Typography font="gurmukhi" variant="header">
      { toUnicode( gurmukhi ) }
    </Typography>

    {translations
      .filter( ( { translationSourceId } ) => translationSourceId === Languages.English )
      .map( ( {
        translationSourceId,
        translation,
      } ) => (
        <Typography key={translationSourceId} variant="caption">
          {translation}
        </Typography>
      ) )}

    {transliterations.map( ( language ) => (
      <Typography
        key={language}
        variant="caption"
      >
        {transliterators[ language ]( toUnicode( gurmukhi ) )}
      </Typography>
    ) )}
  </View>
)

export default Line
