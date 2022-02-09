import { useLayoutEffect, useState } from 'react'
import { useQuery } from 'react-query'

import Container from '../../components/Container'
import { search } from '../../services/data/search'
import { ContentType } from '../../types/data'
import { RootStackScreenProps } from '../../types/navigation'
import SearchNavbar from './Navbar'
import Results, { ResultsProps } from './Results'

type SearchQuery = { queryKey: [string] }
const searchQuery = ( { queryKey }: SearchQuery ) => search( ...queryKey )

export type SearchScreenProps = RootStackScreenProps<'Root.Search'>

const SearchScreen = ( { navigation }: SearchScreenProps ) => {
  const [ searchValue, setSearch ] = useState( '' )
  console.log( `Searching: ${searchValue}` )

  const { data } = useQuery( searchValue, searchQuery, { keepPreviousData: true } )
  console.log( `Search Result: ${JSON.stringify( data )}` )

  const handleTextChange = ( text: string ) => setSearch( text )

  useLayoutEffect( () => navigation.setOptions( {
    header: () => ( <SearchNavbar onSearchChange={handleTextChange} /> ),
  } ), [ navigation ] )

  const openShabad: ResultsProps['onPress'] = ( { shabad: { id } } ) => navigation.navigate(
    'Root.Home',
    { screen: 'Home.Gurbani', params: { id, type: ContentType.Shabad } },
  )

  return (
    <Container>
      {!!data && <Results results={data} onPress={openShabad} />}
    </Container>
  )
}

export default SearchScreen
