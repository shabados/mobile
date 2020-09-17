import React from 'react'
import { View, StyleSheet, TextInput } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

import { OS } from '../lib/consts'

const styles = StyleSheet.create( {
  centered: {
    marginBottom: 'auto',
    marginTop: 'auto',
  },
  searchBar: {
    paddingLeft: OS.android ? 10 : undefined,
    padding: OS.ios ? 10 : undefined,
    flexDirection: 'row',
    borderRadius: 10,
    backgroundColor: 'rgb(220,219,224)',
  },
  searchInputBox: {
    flex: 1,
    fontSize: 22,
    marginLeft: 5,
    fontFamily: 'OpenGurbaniAkhar-Black',
  },
} )

type SearchBarProps = {
  handleTextChanges: ( t: string ) => void,
}

const SearchBar = ( { handleTextChanges }: SearchBarProps ) => (
  <View style={styles.searchBar}>
    <Icon name="magnify" size={25} style={styles.centered} />
    <TextInput
      placeholder="Koj"
      style={[ styles.searchInputBox, styles.centered ]}
      clearButtonMode="always"
      autoCorrect={false}
      autoCapitalize="none"
      onChangeText={handleTextChanges}
    />
  </View>
)

export default SearchBar
