import React, { useLayoutEffect, useState } from 'react'
import { RouteProp, useNavigation } from '@react-navigation/native'
import { ResultOptions, useQuery } from 'react-query'
import { Alert } from 'react-native'

import Screens from '../../lib/screens'
import { search } from '../../data/lines'
import Container from '../../components/Container'

import Results, { ResultsProps } from './Results'
import Navbar from './Navbar'

type SearchQuery = { queryKey: [string] }
const searchQuery = ( { queryKey }: SearchQuery ) => search( ...queryKey )

const SearchScreen = () => {
  const [ searchValue, setSearch ] = useState( '' )
  const { data } = useQuery( searchValue, searchQuery )

  const handleTextChange = ( text: string ) => setSearch( text )

  const navigation = useNavigation()
  useLayoutEffect( () => navigation.setOptions( {
    header: () => ( <Navbar onSearchChange={handleTextChange} /> ),
  } ) )

  const openShabad: ResultsProps['onPress'] = ( shabad ) => navigation.navigate( Screens.Gurbani, shabad )

  return (
    <Container>
      {!!searchValue.length && data && ( <Results results={data} onPress={openShabad} /> )}
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
