import { keepPreviousData, useQuery } from '@tanstack/react-query'
import { useNavigation, useRouter } from 'expo-router'
import { useLayoutEffect, useState } from 'react'

import Container from '~/components/atoms/Container'
import { search } from '~/services/data/search'

import Results, { ResultsProps } from './Results'
import SearchHeader from './SearchHeader'

type SearchQuery = { queryKey: [string] }
const searchQuery = ( { queryKey }: SearchQuery ) => search( ...queryKey )

const SearchTemplate = () => {
  const router = useRouter()
  const navigation = useNavigation()

  const [ searchValue, setSearchValue ] = useState( '' )

  const { data } = useQuery( {
    queryKey: [ searchValue ],
    queryFn: searchQuery,
    placeholderData: keepPreviousData,
  } )

  useLayoutEffect( () => {
    navigation.setOptions( {
      header: () => <SearchHeader onSearchChange={setSearchValue} />,
    } )
  }, [ navigation ] )

  const openShabad: ResultsProps['onPress'] = ( { shabad: { id }, line } ) => router.navigate(
    `/content/shabad/${id}?lineId=${line.id}`,
  )

  return (
    <Container safeArea left right>
      {!!data && <Results results={data} onPress={openShabad} />}
    </Container>
  )
}

export default SearchTemplate
