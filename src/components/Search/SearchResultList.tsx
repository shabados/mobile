import React, { FC, Dispatch, SetStateAction } from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { Q } from '@nozbe/watermelondb'
import { map } from 'rxjs/operators'

import useDatabase from '../../hooks/use-database'
import useObservable from '../../hooks/use-observable'
import SearchResult from '../../models/SearchResult'

interface SearchResultListProps {
  search: string;
  initPageCount: number;
  setInitPageCount: Dispatch<SetStateAction<number>>;
}

const styles = StyleSheet.create( {
  resultsCountCard: {
    backgroundColor: 'lightgrey',
  },
  resultsCount: {
    color: 'grey',
    padding: 15,
    fontSize: 18,
  },
} )

const SearchResultList: FC<SearchResultListProps> = ( {
  search,
  initPageCount,
  setInitPageCount,
}: SearchResultListProps ) => {
  const takeCount = 20
  const database = useDatabase()

  const query = database.collections
    .get( 'searchResults' )
    .query( Q.where( 'searchTerm', Q.eq( search ) ) )

  const searchResults: SearchResult[] = useObservable(
    query
      .observe()
      .pipe(
        map( ( data ) => data.slice(
          initPageCount * takeCount,
          initPageCount * takeCount + takeCount,
        ) ),
      ),
    [],
    [ search, initPageCount ],
  )

  const totalResultCount: number = useObservable( query.observeCount(), 0, [ search ] )

  const loadMore = (): void => {
    console.log( 'loadMore' )
    setInitPageCount( initPageCount + 1 )
  }

  return (
    <View style={styles.resultsCountCard}>
      <Text style={styles.resultsCount} allowFontScaling>
        {`Search Results: ${searchResults.length} of ${totalResultCount}`}
      </Text>
    </View>
  )
}
export default SearchResultList
