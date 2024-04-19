import Icon from '@expo/vector-icons/Ionicons'
import { useEffect, useRef, useState } from 'react'
import { Platform, Pressable, StyleSheet, TextInput, TextInputProps, View } from 'react-native'

import { registerTranslations, useTranslation } from '~/services/i18n'
import { Colors, my, units } from '~/themes'

const strings = registerTranslations( {
  placeholder: {
    en: 'Search',
    pa: 'ਖੋਜੋ',
    hi: 'सर्च करें ',
    ms: 'Mencari',
    de: 'Suchen',
    es: 'Buscar',
    el: 'Αναζήτηση',
    fr: 'Rechercher',
    it: 'Cerca',
    fil: 'Maghanap',
    jp: '検索',
    ko: '검색',
    th: 'ค้นหา',
  },
} )

const styles = StyleSheet.create( {
  clearButton: {
    color: Colors.SecondaryText,
    fontSize: 18,
    padding: units.minimumTouchDimension / 4,
  },
  clearButtonContainer: {
    ...my(),
  },
  searchBar: {
    paddingLeft: units.horizontalLayoutMargin / 2,
    flexDirection: 'row',
    borderRadius: units.horizontalLayoutMargin / 2,
    backgroundColor: Colors.InputBox,
    height: units.minimumTouchDimension,
  },
  searchIcon: {
    ...my(),
    fontSize: units.minimumTouchDimension / 2,
    color: Colors.SecondaryText,
  },
  searchInputBox: {
    fontSize: units.base,
    flex: 1,
    ...Platform.select( {
      ios: { marginLeft: units.base / 2 },
      android: { marginLeft: units.base / 4 },
    } ),
    color: Colors.PrimaryText,
    ...my(),
  },
} )

export type SearchBarProps = TextInputProps

const SearchBar = ( {
  onChangeText = () => {},
  style,
  autoFocus,
  ...props
}: SearchBarProps ) => {
  const { t } = useTranslation()

  const inputRef = useRef<TextInput>( null )
  const [ input, setInput ] = useState( '' )

  const handleChangeText = ( text: string ) => {
    setInput( text )
    onChangeText( text )
  }

  const clearInput = () => {
    inputRef.current?.clear()
    setInput( '' )
  }

  useEffect( () => {
    if ( !autoFocus ) return

    // Seems to cause a crash otherwise when autoFocus is true and inside a modal/new screen
    // It is possible that the keyboard is not always ready without some sort of delay
    setTimeout( () => inputRef.current?.focus(), 100 )
  }, [ autoFocus ] )

  return (
    <View style={[ styles.searchBar, style ]}>
      <Icon name="search" style={styles.searchIcon} />

      <TextInput
        ref={inputRef}
        placeholder={t( strings.placeholder )}
        placeholderTextColor={Colors.SecondaryText}
        style={styles.searchInputBox}
        clearButtonMode="never"
        autoCorrect={false}
        autoCapitalize="none"
        returnKeyType="search"
        onChangeText={handleChangeText}
        {...props}
      />

      {!!input.length && (
        <View style={styles.clearButtonContainer}>
          <Pressable onPress={clearInput}>
            <Icon style={styles.clearButton} name="close-circle" testID="clear-search" />
          </Pressable>
        </View>
      )}
    </View>
  )
}

export default SearchBar
