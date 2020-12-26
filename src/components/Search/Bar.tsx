import React from 'react'
import { View, StyleSheet, TextInput, Button } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { useTranslation } from 'react-i18next'

import { OS } from '../../lib/consts'
import Colours from '../../themes/colours'
import { my } from '../../themes/utils'
import { Language, registerTranslations } from '../../lib/i18n'

const phrases = registerTranslations( 'Search', {
  searchPlaceholder: {
    [ Language.EnUS ]: 'Search',
    [ Language.Pa ]: 'ਖੌਜ',
  },
} )

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

const SearchBar = ( { onChangeText }: SearchBarProps ) => {
  const { t, i18n } = useTranslation()

  const changeLanguage = ( lng: string ) => {
    // TODO @harjot1singh handle catch properly with sentry
    i18n.changeLanguage( lng ).catch( console.error )
  }
  return (
    <View style={styles.searchBar}>
      <Icon name="magnify" size={25} style={styles.searchIcon} />
      <TextInput
        placeholder={t( phrases.searchPlaceholder )}
        style={styles.searchInputBox}
        clearButtonMode="always"
        autoCorrect={false}
        autoCapitalize="none"
        onChangeText={onChangeText}
      />
      {/* // TODO move changeLanguage buttons to 'more' menu */}
      <Button
        title="PA"
        color="orange"
        onPress={() => changeLanguage( Language.Pa )}
      />
      <Button
        title="EN"
        color="cadetblue"
        onPress={() => changeLanguage( Language.EnUS )}
      />
    </View>
  )
}

export default SearchBar
