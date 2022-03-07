import { StyleProp, StyleSheet, TextStyle } from 'react-native'
import Animated, { FadeInRight } from 'react-native-reanimated'

import GurmukhiLine from '../../../components/GurmukhiLine'
import TranslationLine from '../../../components/TranslationLine'
import TransliterationLine from '../../../components/TransliterationLine'
import Languages from '../../../helpers/languages'
import { useFeatureStatus } from '../../../services/feature'
import Units from '../../../themes/units'
import { px } from '../../../themes/utils'
import { TranslationData } from '../../../types/data'

const styles = StyleSheet.create( {
  largeFont: {
    fontSize: Units.Base * Units.GurmukhiLatinRatio * 1.2,
  },
  root: {
    ...px( 20 ),
  },
  smallFont: {
    fontSize: ( Units.Base * Units.GurmukhiLatinRatio ) / 1.2,
  },
} )

export type LineProps = {
  style?: StyleProp<TextStyle>,
  gurmukhi: string,
  translations: TranslationData[],
  transliterations: ( Languages.English | Languages.Hindi | Languages.Urdu )[],
}

const getGurmukhiFontStyle = ( size: ReturnType<typeof useFeatureStatus> ) => {
  if ( size === 'small' ) return styles.smallFont
  if ( size === 'large' ) return styles.largeFont

  return null
}

const Line = ( {
  style,
  gurmukhi,
  translations,
  transliterations,
}: LineProps ) => {
  const fontSizeStyle = getGurmukhiFontStyle( useFeatureStatus( 'gurmukhi_font_size' ) )

  return (
    <Animated.View style={[ styles.root, style ]} entering={FadeInRight}>
      <GurmukhiLine style={fontSizeStyle}>{gurmukhi}</GurmukhiLine>

      {transliterations?.map( ( language ) => (
        <TransliterationLine key={language} language={language}>
          {gurmukhi}
        </TransliterationLine>
      ) )}

      {translations
        ?.filter( ( { translationSourceId } ) => translationSourceId === Languages.English )
        .map( ( { translationSourceId, translation } ) => (
          <TranslationLine key={translationSourceId}>
            {translation}
          </TranslationLine>
        ) )}
    </Animated.View>
  )
}

export default Line
