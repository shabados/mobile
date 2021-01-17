import React from 'react'
import { StyleSheet, FlatList, View } from 'react-native'

import { SearchData } from '../../types/data'

import Result from './Result'

const styles = StyleSheet.create( {
  container: {
    flex: 1,
  },
  separator: {
    borderBottomWidth: 0.5,
    borderBottomColor: '#BBBBE1',
    opacity: 0.3,
  },
} )

export type ResultsProps = {
  results: SearchData[],
  onPress?: ( line: SearchData ) => void,
}

const Results = ( {
  results,
  onPress = () => {},
  ...props
}: ResultsProps ) => (
  <View style={styles.container}>
    <FlatList
      {...props}
      data={results}
      keyExtractor={( { line: { id } } ) => id}
      ItemSeparatorComponent={() => <View style={styles.separator} />}
      renderItem={( {
        index,
        item: {
          line: {
            id,
            translations,
            gurmukhi,
            sourcePage,
          },
          shabad: {
            source: { nameGurmukhi, pageNameGurmukhi },
          },
        },
      } ) => (
        <Result
          key={id}
          page={`${pageNameGurmukhi} ${sourcePage}`}
          source={nameGurmukhi}
          translation={translations[ 0 ].translation}
          gurmukhi={gurmukhi}
          onPress={() => onPress( results[ index ] )}
        />
      )}
    />
  </View>
)

export default Results
