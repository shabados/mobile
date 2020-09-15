import React from 'react'
import { View, StyleSheet, TextInput } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

const styles = StyleSheet.create( {
  searchBar: {
    padding: 10,
    flexDirection: 'row',
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
    <Icon name="magnify" size={25} />
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
