import { useRef, useState } from 'react'
import { Pressable, StyleSheet, TextInput, TextInputProps, View } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'

import { OS } from '../lib/consts'
import Colors from '../themes/colors'
import { my } from '../themes/utils'

const styles = StyleSheet.create( {
  clearButton: {
    color: Colors.SecondaryText,
    opacity: 0.6,
    padding: 12,
  },
  clearButtonContainer: {
    ...my(),
  },
  searchBar: {
    ...( OS.android && { paddingLeft: 10 } ),
    ...( OS.ios && { paddingLeft: 10 } ),
    flexDirection: 'row',
    borderRadius: 10,
    backgroundColor: Colors.InputBox,
    width: '100%',
    height: 42,
  },
  searchIcon: {
    ...my(),
    fontSize: 16,
    color: Colors.SecondaryText,
  },
  searchInputBox: {
    fontSize: 17,
    flex: 1,
    marginLeft: 5,
    color: Colors.PrimaryText,
    ...my(),
  },
} )

export type SearchBarProps = TextInputProps

const SearchBar = ( {
  onChangeText = () => {},
  style,
  ...props
}: SearchBarProps ) => {
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

  return (
    <View style={[ styles.searchBar, style ]}>
      <Icon name="search" size={25} style={styles.searchIcon} />

      <TextInput
        ref={inputRef}
        placeholder="Search"
        keyboardAppearance="dark"
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
            <Icon style={styles.clearButton} name="close-circle" size={17} testID="clear-search" />
          </Pressable>
        </View>
      )}
    </View>
  )
}

export default SearchBar
