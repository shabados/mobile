import { toUnicode } from 'gurmukhi-utils'
import { StyleSheet, View } from 'react-native'

import Typography from '../../components/Typography'
import { OS } from '../../lib/consts'
import Languages from '../../lib/languages'
import transliterators from '../../lib/transliterators'
import Colors from '../../themes/colors'
import Fonts from '../../themes/fonts'
import Units from '../../themes/units'
import { px, py } from '../../themes/utils'
import { TranslationData } from '../../types/data'

const styles = StyleSheet.create( {
  gurbani: {
    fontSize: Units.Base * Units.GurmukhiLatinRatio,
    ...( OS.android && { fontFamily: Fonts.MuktaMahee } ),
    lineHeight: Units.Base * Units.GurmukhiLineHeightMultiplier,
  },
  root: {
    ...px( 20 ),
    paddingTop: ( ( Units.Base * Units.LineHeightMultiplier ) ),
  },
  text: {
    color: Colors.SecondaryText,
  },
  transliteration: {
    paddingBottom: ( Units.Base * Units.LineHeightMultiplier ) / 4,
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
    <Typography style={[ styles.gurbani ]}>{toUnicode( gurmukhi )}</Typography>

    {translations
      .filter( ( { translationSourceId } ) => translationSourceId === Languages.English )
      .map( ( {
        translationSourceId,
        translation,
      } ) => <Typography key={translationSourceId} style={styles.text}>{translation}</Typography> )}

    {transliterations.map( ( language ) => (
      <Typography
        key={language}
        style={[ styles.text, styles.transliteration ]}
      >
        {transliterators[ language ]( toUnicode( gurmukhi ) )}
      </Typography>
    ) )}
  </View>
)

export default Line
