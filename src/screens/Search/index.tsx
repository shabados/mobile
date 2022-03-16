import { useLayoutEffect, useState } from 'react'
import { useQuery } from 'react-query'

import Container from '../../components/Container'
import { search } from '../../services/data/search'
import { ContentType } from '../../types/data'
import { RootStackScreenProps } from '../../types/navigation'
import Results, { ResultsProps } from './Results'
import SearchHeader from './SearchHeader'

type SearchQuery = { queryKey: [string] }
const searchQuery = ( { queryKey }: SearchQuery ) => search( ...queryKey )

export type SearchScreenProps = RootStackScreenProps<'Root.Search'>

const SearchScreen = ( { navigation }: SearchScreenProps ) => {
  const [ searchValue, setSearchValue ] = useState( '' )
  console.log( `Searching: ${searchValue}` )

  const { data } = useQuery( searchValue, searchQuery, { keepPreviousData: true, suspense: false } )
  console.log( `Search Result: ${JSON.stringify( data )}` )

  useLayoutEffect( () => {
    navigation.setOptions( {
      headerTitle: () => (
        <SearchHeader navigation={navigation} onSearchChange={setSearchValue} />
      ),
    } )
  }, [ navigation ] )

  const openShabad: ResultsProps['onPress'] = ( { shabad: { id } } ) => navigation.navigate(
    'Root.Home',
    { screen: 'Home.Tab.Gurbani', params: { screen: 'Gurbani.View', params: { id, type: ContentType.Shabad } } },
  )

  return (
    <Container safeArea left right bottom>
      {!!data && <Results results={data} onPress={openShabad} />}
    </Container>
  )
}

export default SearchScreen
