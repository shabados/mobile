import React, { FunctionComponent } from 'react'
import {
  Card,
  CardItem,
  Text,
  Body,
  View,
  Right,
  Button,
  Left,
} from 'native-base'
import { FlatList } from 'react-native-gesture-handler'
import { Q } from '@nozbe/watermelondb'
import { map } from 'rxjs/operators'

import useDatabase from '../hooks/use-database'
import useObservable from '../hooks/use-observable'
import SearchResult from '../models/SearchResult'

type SearchResultListProps = {
  search: string;
  initPageCount: number;
  setInitPageCount: any;
};
const SearchResultList: FunctionComponent<SearchResultListProps> = ( {
  search,
  initPageCount,
  setInitPageCount,
} ) => {
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
  const totalResultCount: number = useObservable( query.observeCount(), 0, [
    search,
  ] )
  const loadMore = () => {
    console.log( 'loadMore' )
    setInitPageCount( initPageCount + 1 )
  }
  return (
    <Card
      style={{
        paddingLeft: 0,
        paddingRight: 0,
        paddingTop: 0,
        paddingBottom: 0,
        marginLeft: 0,
        marginRight: 0,
        marginTop: 0,
        marginBottom: 0,
        flex: 0,
      }}
    >
      <CardItem header style={{ backgroundColor: 'lightgrey' }}>
        <Body>
          <Text style={{ color: 'grey' }}>
            Search Results:
            {' '}
            {searchResults.length}
            {' '}
            of
            {' '}
            {totalResultCount}
          </Text>
        </Body>
      </CardItem>

      <FlatList
        data={searchResults}
        keyExtractor={( item ) => item.id}
        onEndReached={loadMore}
        scrollEventThrottle={100}
        onEndReachedThreshold={0}
        renderItem={( { item, index, separators } ) => (
          <View>
            <CardItem>
              <Left>
                <Text>{index}</Text>
              </Left>
              <Body>
                <Text
                  style={{ fontFamily: 'OpenGurbaniAkhar-Black', color: 'grey' }}
                >
                  {item.section}
                </Text>
              </Body>
              <Right>
                <Text
                  style={{ fontFamily: 'OpenGurbaniAkhar-Black', color: 'grey' }}
                >
                  AMg
                  {' '}
                  {item.ang}
                </Text>
              </Right>
            </CardItem>
            <CardItem bordered>
              <Body>
                <Text
                  style={{ fontFamily: 'OpenGurbaniAkhar-Black', fontSize: 20 }}
                >
                  {item.gurbani}
                </Text>
                <Text style={{ color: 'grey', fontSize: 14 }}>
                  {item.translation}
                </Text>
              </Body>
            </CardItem>
          </View>
        )}
      >
        <CardItem footer>
          <Body>
            <Button onPress={loadMore}>
              <Text>Load More</Text>
            </Button>
          </Body>
        </CardItem>
      </FlatList>
    </Card>
  )
}
export default SearchResultList
