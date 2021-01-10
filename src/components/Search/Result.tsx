import React from 'react'
import { Text, StyleSheet, View, Pressable, PressableProps, ViewStyle } from 'react-native'

import Colours from '../../themes/colours'

const styles = StyleSheet.create( {
  container: {
    padding: 5,
    backgroundColor: Colours.MediumGray,
    borderBottomColor: Colours.LightGray,
    borderBottomWidth: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headerText: {
    fontSize: 15,
    fontWeight: '400',
  },
  line: {
    marginBottom: 5,
    fontSize: 22,
    fontWeight: '600',
  },
  translation: {
    fontSize: 15,
  },
} )

export type SearchResultDataProps = {
  /**
   * Name of gurbani source
   */
  source: string,
  /**
   * Page number in source
   */
  page: number,
  /**
   * Last accessed date
   */
  date?: string,
  /**
   * Gurbani Line
   */
  line: string,
  /**
   * Translation for gurbani line
   */
  translation: string,
}

export type SearchResultProps = {
  /**
   * Style for `View` container
   */
  style?: ViewStyle,
} & Omit<PressableProps, 'style'> & SearchResultDataProps

const SearchResult = ( {
  source,
  page,
  date,
  line,
  translation,
  onPress = () => {},
  style,
  ...props
}: SearchResultProps ) => (
  <Pressable onPress={onPress} {...props}>
    <View style={[ styles.container, style ]}>
      <View style={styles.header}>
        <Text style={styles.headerText}>{source}</Text>
        <Text>{page}</Text>
        {date && <Text>{date}</Text>}
      </View>

      <Text style={styles.line}>{line}</Text>

      <Text style={styles.translation}>{translation}</Text>
    </View>
  </Pressable>
)

export default SearchResult
