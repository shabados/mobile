import React, { useRef, useState } from 'react'
import { StyleSheet, View, TextInput, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'

import Colours from '../themes/colours'
import { my } from '../themes/utils'
import SearchResultsData from '../mock-data/results'
import { SearchBar, SearchResultList } from '../components/Search'
import BackButton from '../components/BackButton'
import Container from '../components/Container'

const styles = StyleSheet.create( {
  backButton: {
    ...my,
  },
  clearButton: {
    ...my,
    marginLeft: -30,
  },
  searchBar: {
    flex: 0.95,
  },
  searchInput: {
    flex: 1,
    flexDirection: 'row',
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
  const [ searchValue, setSearch ] = useState( '' )
  const [ , setPageCount ] = useState( 0 )
  const searchInputRef = useRef<TextInput>( null )

  const handleTextChange = ( v: string ) => {
    setSearch( v )
    setPageCount( 0 )
  }

  const clearInput = () => {
    searchInputRef.current?.clear()
    setSearch( '' )
  }

  return (
    <Container statusBarColor={Colours.MediumGray}>
      <View style={styles.searchStrip}>
        <BackButton label={<Icon name="keyboard-backspace" size={26} />} style={styles.backButton} />

        <View style={styles.searchInput}>
          <View style={styles.searchBar}>
            <SearchBar ref={searchInputRef} onChangeText={handleTextChange} />
          </View>

          {!!searchValue.length && (
            <View style={styles.clearButton}>
              <TouchableOpacity onPress={clearInput}>
                <Icon name="cancel" size={22} />
              </TouchableOpacity>
            </View>
          )}
        </View>
      </View>

      {!!searchValue.length && <SearchResultList data={SearchResultsData} />}
    </Container>
  )
}

export default SearchScreen
