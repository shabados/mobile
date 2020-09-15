import React, { useState } from 'react'
import { StyleSheet, View } from 'react-native'

import SearchBar from '../components/Search'
import ShortcutDrawer from '../components/ShortcutDrawer'
import Container from '../components/Container'

const styles = StyleSheet.create( {
  searchBarContainer: {
    flex: 1,
    marginTop: '8%',
  },
} )

const SearchScreen = () => {
  const [ , setSearch ] = useState( '' )
  const [ , setPageCount ] = useState( 0 )

  const handleTextChanges = ( v: string ) => {
    setSearch( v )
    setPageCount( 0 )
  }

  return (
    <Container>

      <View style={styles.searchBarContainer}>
        <SearchBar handleTextChanges={handleTextChanges} />
      </View>

      <ShortcutDrawer />

    </Container>
  )
}
export default SearchScreen
