import React, { useRef, useState } from 'react'
import { StyleSheet, View, TextInput } from 'react-native'
import AntIcon from 'react-native-vector-icons/AntDesign'
import EntypoIcon from 'react-native-vector-icons/Entypo'
import { TouchableOpacity } from 'react-native-gesture-handler'

import { SearchBar, SearchResultList } from '../components/Search'
import BackButton from '../components/BackButton'
import Container from '../components/Container'
import Colours from '../themes/colours'
import { my } from '../themes/utils'
import { OS } from '../lib/consts'
import SearchResultsData from '../mock-data/results'

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

        <BackButton label={<AntIcon name="arrowleft" size={24} />} style={styles.backButton} />

        <View style={styles.searchInput}>

          <View style={styles.searchBar}>
            <SearchBar ref={searchInputRef} onChangeText={handleTextChange} />
          </View>

          {OS.android && searchValue.length > 0 && (
            <View style={styles.clearButton}>
              <TouchableOpacity onPress={clearInput}>
                <EntypoIcon name="circle-with-cross" size={17} />
              </TouchableOpacity>
            </View>
          )}

        </View>

      </View>

      {searchValue.length > 0 && <SearchResultList data={SearchResultsData} />}

    </Container>
  )
}

export default SearchScreen
