import { toUnicode } from 'gurmukhi-utils'
import { StyleSheet, View } from 'react-native'

import Typography from '../../components/Typography'
import Languages from '../../lib/languages'
import transliterators from '../../lib/transliterators'
import Colors from '../../themes/colors'
import { px, py } from '../../themes/utils'
import { TranslationData } from '../../types/data'

const styles = StyleSheet.create( {
  gurbani: {
    fontSize: 19.5, // 16/14*base
  },
  root: {
    ...px( 20 ),
    ...py( 7.4375 ),
  },
  text: {
    color: Colors.SecondaryText,
    paddingTop: 7.4375, // base*lineHeight/4
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
        style={styles.text}
      >
        {transliterators[ language ]( toUnicode( gurmukhi ) )}
      </Typography>
    ) )}
  </View>
)

export default Line
