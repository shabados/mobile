import React, { useState } from 'react'
import { StyleSheet, View } from 'react-native'

import SearchBar from '../components/Search'
import BackButton from '../components/BackButton'
import COLORS from '../themes/colors'
import Container from '../components/Container'

const styles = StyleSheet.create( {
  backButton: {
    marginBottom: 'auto',
    marginTop: 'auto',
  },
  searchStrip: {
    paddingTop: 15,
    paddingBottom: 25,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    backgroundColor: COLORS.MediumGray,
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
    <Container statusBarColor={COLORS.MediumGray}>
      <View style={styles.searchStrip}>
        <View style={{ flex: 0.95 }}>
          <SearchBar handleTextChanges={handleTextChanges} />
        </View>
        <BackButton style={styles.backButton} />
      </View>
    </Container>
  )
}

export default SearchScreen
