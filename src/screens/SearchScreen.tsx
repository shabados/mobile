import React, { useState } from 'react'
import { StyleSheet, View } from 'react-native'

import { SearchBar } from '../components/Search'
import BackButton from '../components/BackButton'
import Container from '../components/Container'
import Colours from '../themes/colours'
import { mx } from '../themes/utils'

const styles = StyleSheet.create( {
  backButton: {
    ...mx,
  },
  searchBar: {
    flex: 0.95,
  },
  searchStrip: {
    paddingTop: 15,
    paddingBottom: 25,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    backgroundColor: Colours.MediumGray,
  },
} )

const SearchScreen = () => {
  const [ , setSearch ] = useState( '' )
  const [ , setPageCount ] = useState( 0 )

  const handleTextChange = ( v: string ) => {
    setSearch( v )
    setPageCount( 0 )
  }

  return (
    <Container statusBarColor={Colours.MediumGray}>
      <View style={styles.searchStrip}>
        <View style={styles.searchBar}>
          <SearchBar onChangeText={handleTextChange} />
        </View>
        <BackButton style={styles.backButton} />
      </View>
    </Container>
  )
}

export default SearchScreen
