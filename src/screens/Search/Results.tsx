import React from 'react'
import { StyleSheet, FlatList, View } from 'react-native'

import { LineData } from '../../types/data'

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
  results: LineData[],
  onPress?: ( line: LineData ) => void,
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
      ItemSeparatorComponent={() => <View style={styles.separator} />}
      renderItem={( {
        index,
        item: {
          translations,
          gurmukhi,
          sourcePage,
          id,
        },
      } ) => (
        <Result
          key={id}
          page={sourcePage}
          source="SRI gurU gRMQ swihb jI"
          translation={translations[ 0 ].translation}
          gurmukhi={gurmukhi}
          onPress={() => onPress( results[ index ] )}
        />
      )}
    />
  </View>
)

export default Results
