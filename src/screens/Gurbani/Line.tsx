import { toUnicode } from 'gurmukhi-utils'
import { StyleSheet } from 'react-native'
import Animated, { FadeInRight } from 'react-native-reanimated'

import Typography from '../../components/Typography'
import Languages from '../../helpers/languages'
import OS from '../../helpers/os'
import transliterators from '../../helpers/transliterators'
import { useFeatureStatus } from '../../services/feature'
import Colors from '../../themes/colors'
import Fonts from '../../themes/fonts'
import Units from '../../themes/units'
import { px } from '../../themes/utils'
import { TranslationData } from '../../types/data'

const styles = StyleSheet.create( {
  gurbani: {
    fontSize: Units.Base * Units.GurmukhiLatinRatio,
    ...( OS.android && { fontFamily: Fonts.MuktaMahee } ),
    lineHeight: Units.Base * Units.GurmukhiLineHeightMultiplier,
  },
  largeFont: {
    fontSize: Units.Base * Units.GurmukhiLatinRatio * 1.2,
  },
  root: {
    ...px( 20 ),
    paddingTop: Units.Base * Units.LineHeightMultiplier,
  },
  smallFont: {
    fontSize: ( Units.Base * Units.GurmukhiLatinRatio ) / 1.2,
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

const getGurmukhiFontStyle = ( size: ReturnType<typeof useFeatureStatus> ) => {
  if ( size === 'small' ) return styles.smallFont
  if ( size === 'large' ) return styles.largeFont

  return null
}

/**
 * Renders the Gurmukhi, any translations, and transliterates the Gurmukhi.
 */
const Line = ( {
  gurmukhi,
  translations,
  transliterations,
}: LineProps ) => {
  const fontSizeStyle = getGurmukhiFontStyle( useFeatureStatus( 'gurmukhi_font_size' ) )

  return (
    <Animated.View style={styles.root} entering={FadeInRight}>
      <Typography style={[ styles.gurbani, fontSizeStyle ]}>{toUnicode( gurmukhi )}</Typography>

      {transliterations.map( ( language ) => (
        <Typography
          key={language}
          style={[ styles.text, styles.transliteration ]}
        >
          {transliterators[ language ]( toUnicode( gurmukhi ) )}
        </Typography>
      ) )}

      {translations
        .filter( ( { translationSourceId } ) => translationSourceId === Languages.English )
        .map( ( { translationSourceId, translation } ) => (
          <Typography
            key={translationSourceId}
            style={styles.text}
          >
            {translation}
          </Typography>
        ) )}
    </Animated.View>
  )
}

export default Line
