import { StyleProp, StyleSheet, ViewStyle } from 'react-native'
import Animated, { FadeInRight } from 'react-native-reanimated'

import GurmukhiLine from '~/components/molecules/gurmukhi-line'
import TranslationLine from '~/components/molecules/translation-line'
import TransliterationLine from '~/components/molecules/transliteration-line'
import { languages } from '~/helpers/languages'
import { TransliterableLanguages } from '~/helpers/transliterators'
import { px } from '~/themes'
import { TranslationData } from '~/types/data'

const styles = StyleSheet.create( {
  root: {
    ...px( 20 ),
  },
} )

export type LineProps = {
  style?: StyleProp<ViewStyle>,
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
