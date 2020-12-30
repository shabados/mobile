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
  id: string,
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
        keyExtractor={( item ) => item.id}
        renderItem={( { item } ) => {
          const selected = item.id === selectedId ? Colours.DarkGray : Colours.MediumGray

          return (
            <SearchResult
              {...item}
              onPress={() => setSelectedId( item.id )}
              customStyle={{ backgroundColor: selected }}
            />
          )
        }}
        {...props}
      />
    </View>
  )
}

export default ResultsList
