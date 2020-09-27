import React from 'react'
import { View, StyleSheet, TextInput, Button } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { I18nextProvider, useTranslation } from 'react-i18next'

import { OS } from '../lib/consts'
import Colours from '../themes/colours'
import { mx } from '../themes/utils'
import i18n, { Locales } from '../lib/i18n'

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
    ...mx,
  },
} )

type SearchBarProps = {
  handleTextChanges: ( t: string ) => void,
}

const SearchBar = ( { handleTextChanges }: SearchBarProps ) => {
  const { t } = useTranslation()

  const changeLanguage = ( lng: string ) => {
    i18n.changeLanguage( lng )
  }
  return (
    <I18nextProvider i18n={i18n}>
      <View style={styles.searchBar}>
        <Icon name="magnify" size={25} style={styles.searchIcon} />
        <TextInput
          placeholder={t( 'searchBar.placeholder' )}
          style={styles.searchInputBox}
          clearButtonMode="always"
          autoCorrect={false}
          autoCapitalize="none"
          onChangeText={handleTextChanges}
        />
        <Button
          title="PA"
          color="orange"
          onPress={() => changeLanguage( Locales.Punjabi )}
        />
        <Button
          title="EN"
          color="cadetblue"
          onPress={() => changeLanguage( Locales.EnglishUS )}
        />
      </View>
    </I18nextProvider>
  )
}

export default SearchBar
