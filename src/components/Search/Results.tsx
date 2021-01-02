import React, { useState } from 'react'
import { StyleSheet, FlatList, View, FlatListProps } from 'react-native'

import Colours from '../../themes/colours'

import SearchResult, { SearchResultDataProps } from './Result'

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
} & Omit<FlatListProps<TListData>, 'renderItem'|'keyExtractor'|'renderItem'>

const ResultsList = ( { data, ...props }:ResultsListProps ) => {
  const [ selectedId, setSelectedId ] = useState<string>()

  return (
    <View style={styles.container}>
      <FlatList<TListData>
        data={data}
        extraData={selectedId}
        renderItem={( { item } ) => {
          const selected = item.key === selectedId ? Colours.DarkGray : Colours.MediumGray

          return (
            <SearchResult
              {...item}
              onPress={() => setSelectedId( item.key )}
              style={{ backgroundColor: selected }}
            />
          )
        }}
        {...props}
      />
    </View>
  )
}

export default ResultsList
