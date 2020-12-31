import { toUnicode } from 'gurmukhi-utils'
import React from 'react'
import { StyleSheet, View } from 'react-native'

import Languages from '../lib/languages'
import transliterators from '../lib/transliterators'
import Colours from '../themes/colours'
import Fonts from '../themes/fonts'
import { px, py } from '../themes/utils'

import Text from './Text'

type Translation = {
  translationSourceId: number,
  translation: string,
}

type LineProps = {
  /**
   * Gurbani line, in ASCII Gurmukhi form.
   */
  gurbani: string,
  /**
   * Translations, with accompanying languages.
   */
  translations: Translation[],
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

const Line = ( {
  gurbani,
  translations,
  transliterations,
}: LineProps ) => (
  <View style={styles.root}>
    <Text style={[ styles.text, styles.gurbani ]}>{gurbani}</Text>

    {translations.filter( ( { translationSourceId } ) => translationSourceId === 1 ).map( ( {
      translationSourceId,
      translation,
    } ) => <Text key={translationSourceId} style={styles.text}>{translation}</Text> )}

    {transliterations.map( ( language ) => (
      <Text
        key={language}
        style={styles.text}
      >
        {transliterators[ language ]( toUnicode( gurbani ) )}
      </Text>
    ) )}
  </View>
)

export default Line
