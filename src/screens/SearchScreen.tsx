import React, { useState } from 'react'
import { StyleSheet, View, SafeAreaView } from 'react-native'

import SearchBar from '../components/Search'
import BackButton from '../components/BackButton'
import COLORS from '../themes/colors'

const styles = StyleSheet.create( {
  backButton: {
    marginBottom: 'auto',
    marginTop: 'auto',
  },
  searchBarContainer: {
    backgroundColor: COLORS.MediumGray,
  },
  searchStrip: {
    marginTop: 15,
    marginBottom: 25,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
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
    <SafeAreaView style={styles.searchBarContainer}>
      <View style={styles.searchStrip}>
        <View style={{ flex: 0.95 }}>
          <SearchBar handleTextChanges={handleTextChanges} />
        </View>
        <BackButton style={styles.backButton} />
      </View>
    </SafeAreaView>
  )
}

export default SearchScreen
