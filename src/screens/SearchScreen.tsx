import React, { useState, FC } from 'react'
import { View } from 'react-native'

import {  SearchBar } from '../components/Search'
import ShortcutDrawer from '../components/ShortcutDrawer'
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
      </View>

      <ShortcutDrawer />

    </Container>
  )
}
export default SearchScreen
