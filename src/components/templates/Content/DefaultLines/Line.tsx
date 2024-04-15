import { StyleProp, StyleSheet, TextStyle } from 'react-native'
import Animated, { FadeInRight } from 'react-native-reanimated'

import GurmukhiLine from '~/components/molecules/GurmukhiLine'
import TranslationLine from '~/components/molecules/TranslationLine'
import TransliterationLine from '~/components/molecules/TransliterationLine'
import { languages } from '~/helpers/languages'
import { TransliterableLanguages } from '~/helpers/transliterators'
import { px, units } from '~/themes'
import { TranslationData } from '~/types/data'

const styles = StyleSheet.create( {
  largeFont: {
    fontSize: units.base * units.gurmukhiLatinRatio * 1.2,
  },
  root: {
    ...px( 20 ),
  },
  smallFont: {
    fontSize: ( units.base * units.gurmukhiLatinRatio ) / 1.2,
  },
} )

export type LineProps = {
  style?: StyleProp<TextStyle>,
  gurmukhi: string,
  translations: TranslationData[],
  transliterations: TransliterableLanguages[],
}

const Line = ( {
  style,
  gurmukhi,
  translations,
  transliterations,
}: LineProps ) => (
  <Animated.View style={[ styles.root, style ]} entering={FadeInRight}>
    <GurmukhiLine>{gurmukhi}</GurmukhiLine>

    {transliterations?.map( ( language ) => (
      <TransliterationLine key={language} language={language}>
        {gurmukhi}
      </TransliterationLine>
    ) )}

    {translations
      ?.filter( ( { translationSourceId } ) => translationSourceId === languages.english )
      .map( ( { translationSourceId, translation } ) => (
        <TranslationLine key={translationSourceId}>
          {translation}
        </TranslationLine>
      ) )}
  </Animated.View>
)

export default Line
