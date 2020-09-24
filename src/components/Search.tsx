import React from 'react'
import { View, StyleSheet, TextInput } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

import { OS } from '../lib/consts'
import Colours from '../themes/colours'
import { mx } from '../themes/utils'

const styles = StyleSheet.create( {
  searchBar: {
    ...( OS.android && { paddingLeft: 10 } ),
    ...( OS.ios && { padding: 10 } ),
    flexDirection: 'row',
    borderRadius: 10,
    backgroundColor: Colours.DarkGray,
  },
  searchIcon: {
    ...mx,
  },
  searchInputBox: {
    flex: 1,
    fontSize: 22,
    marginLeft: 5,
    fontFamily: 'OpenGurbaniAkhar-Black',
    ...mx,
  },
} )

type SearchBarProps = {
  handleTextChanges: ( t: string ) => void,
}

const SearchBar = ( { handleTextChanges }: SearchBarProps ) => (
  <View style={styles.searchBar}>
    <Icon name="magnify" size={25} style={styles.searchIcon} />
    <TextInput
      placeholder="Koj"
      style={styles.searchInputBox}
      clearButtonMode="always"
      autoCorrect={false}
      autoCapitalize="none"
      onChangeText={handleTextChanges}
    />
  </View>
)

export default SearchBar
