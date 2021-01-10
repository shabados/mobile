import React from 'react'
import { StyleSheet, FlatList, View, FlatListProps } from 'react-native'

import SearchResult, { SearchResultDataProps, SearchResultProps } from './Result'

const styles = StyleSheet.create( {
  container: {
    flex: 1,
  },
} )

type TListData = {
  key: string,
} & SearchResultDataProps

type ResultsListProps = {
  data: TListData[],
  onPress?: SearchResultProps['onPress'],
} & Omit<FlatListProps<TListData>, 'renderItem' | 'keyExtractor' | 'renderItem'>

const Results = ( { data, onPress, ...props }: ResultsListProps ) => (
  <View style={styles.container}>
    <FlatList
      data={data}
      renderItem={( { item } ) => (
        <SearchResult {...item} onPress={onPress} />
      )}
      {...props}
    />
  </View>
)

export default Results
