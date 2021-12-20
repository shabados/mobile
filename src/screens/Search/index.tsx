import { StackScreenProps } from '@react-navigation/stack'
import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import { useQuery } from 'react-query'

import Container from '../../components/Container'
import { search } from '../../services/data/search'
import { ContentType, SearchData } from '../../types/data'
import Screens, { AppStackParams } from '../screens'
import Navbar from './Navbar'
import Results, { ResultsProps } from './Results'

type SearchQuery = { queryKey: [string] }
const searchQuery = ( { queryKey }: SearchQuery ) => search( ...queryKey )

export type SearchScreenProps = StackScreenProps<AppStackParams, Screens.Search>

const SearchScreen = ( { navigation }: SearchScreenProps ) => {
  const [ searchValue, setSearch ] = useState( '' )
  console.log( `Searching: ${searchValue}` )

  const previousData = useRef<SearchData[]>()
  const { data } = useQuery( searchValue, searchQuery, { placeholderData: previousData.current } )
  console.log( `Search Result: ${JSON.stringify( data )}` )
  useEffect( () => { previousData.current = data }, [ data ] )

  const handleTextChange = ( text: string ) => setSearch( text )

  useLayoutEffect( () => navigation.setOptions( {
    header: () => ( <Navbar onSearchChange={handleTextChange} /> ),
  } ), [ navigation ] )

  const openShabad: ResultsProps['onPress'] = ( { shabad: { id } } ) => navigation.navigate(
    Screens.Gurbani,
    { id, type: ContentType.Shabad },
  )

  return (
    <Container>
      {data && ( <Results results={data} onPress={openShabad} /> )}
    </Container>
  )
}

export const searchScreen = {
  name: Screens.Search,
  component: SearchScreen,
  options: {
    cardStyle: { backgroundColor: 'transparent' },
  },
}

export default SearchScreen
