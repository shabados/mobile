import React, { useEffect, useLayoutEffect, useRef, useState } from 'react'
import { StackScreenProps } from '@react-navigation/stack'
import { useQuery } from 'react-query'

import Screens, { AppStackParams } from '../../lib/screens'
import { search } from '../../data/search'
import Container from '../../components/Container'
import { ContentTypes, SearchData } from '../../types/data'

import Results, { ResultsProps } from './Results'
import Navbar from './Navbar'

type SearchQuery = { queryKey: [string] }
const searchQuery = ( { queryKey }: SearchQuery ) => search( ...queryKey )

export type SearchScreenProps = StackScreenProps<AppStackParams, Screens.Search>

const SearchScreen = ( { navigation }: SearchScreenProps ) => {
  const [ searchValue, setSearch ] = useState( '' )

  const previousData = useRef<SearchData[]>()
  const { data } = useQuery( searchValue, searchQuery, { placeholderData: previousData.current } )
  useEffect( () => { previousData.current = data }, [ data ] )

  const handleTextChange = ( text: string ) => setSearch( text )

  useLayoutEffect( () => navigation.setOptions( {
    header: () => ( <Navbar onSearchChange={handleTextChange} /> ),
  } ), [ navigation ] )

  const openShabad: ResultsProps['onPress'] = ( { shabad: { id } } ) => navigation.navigate(
    Screens.Gurbani,
    { id, type: ContentTypes.Shabad },
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
