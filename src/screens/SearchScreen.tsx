import React, { useState, FC } from 'react'
import { View } from 'react-native'

import SearchResultList from './SearchResultList'
import ShortcutDrawer from '../components/ShortcutDrawer'
import SearchBar from '../components/SearchBar'
import Container from '../components/Container'

const SearchScreen: FC = () => {
  const [ search, setSearch ] = useState( '' )
  const [ pageCount, setPageCount ] = useState( 0 )

  const handleTextChanges = ( v: string ): void => {
    setSearch( v )
    setPageCount( 0 )
  }

  return (
    <Container>

      <View style={{ flex: 1, marginTop: '8%' }}>
        <SearchBar handleTextChanges={handleTextChanges} />
        <SearchResultList
          search={search}
          initPageCount={pageCount}
          setInitPageCount={setPageCount}
        />
      </View>

      <ShortcutDrawer />

    </Container>
  )
}
export default SearchScreen
