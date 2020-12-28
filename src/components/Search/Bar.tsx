import React from 'react'
import { View, StyleSheet, TextInput } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

import { OS } from '../../lib/consts'
import Colours from '../../themes/colours'
import { my } from '../../themes/utils'

const styles = StyleSheet.create( {
  searchBar: {
    ...( OS.android && { paddingLeft: 10 } ),
    ...( OS.ios && { padding: 10 } ),
    flexDirection: 'row',
    borderRadius: 10,
    backgroundColor: Colours.DarkGray,
  },
  searchIcon: {
    ...my,
  },
  searchInputBox: {
    flex: 1,
    fontSize: 22,
    marginLeft: 5,
    ...my,
  },
} )

type SearchBarProps = {
  onChangeText: ( t: string ) => void,
}

const SearchBar = ( { onChangeText }: SearchBarProps ) => (
  <View style={styles.searchBar}>
    <Icon name="magnify" size={25} style={styles.searchIcon} />
    <TextInput
      placeholder="Search"
      style={styles.searchInputBox}
      clearButtonMode="always"
      autoCorrect={false}
      autoCapitalize="none"
      onChangeText={onChangeText}
    />
  </View>
)

export default SearchBar
