import { useRef, useState } from 'react'
import { Pressable, StyleSheet, TextInput, TextInputProps, View } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'

import OS from '../helpers/os'
import Colors from '../themes/colors'
import Units from '../themes/units'
import { my } from '../themes/utils'

const styles = StyleSheet.create( {
  clearButton: {
    color: Colors.SecondaryText,
    fontSize: 18,
    padding: Units.MinimumTouchDimension / 4,
  },
  clearButtonContainer: {
    ...my(),
  },
  searchBar: {
    paddingLeft: Units.HorizontalLayoutMargin / 2,
    flexDirection: 'row',
    borderRadius: Units.HorizontalLayoutMargin / 2,
    backgroundColor: Colors.InputBox,
    height: Units.MinimumTouchDimension,
  },
  searchIcon: {
    ...my(),
    fontSize: Units.MinimumTouchDimension / 2,
    color: Colors.SecondaryText,
  },
  searchInputBox: {
    fontSize: Units.Base,
    flex: 1,
    ...( OS.android && { marginLeft: Units.Base / 4 } ),
    ...( OS.ios && { marginLeft: Units.Base / 2 } ),
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
      <Icon name="search" style={styles.searchIcon} />

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
            <Icon style={styles.clearButton} name="close-circle" testID="clear-search" />
          </Pressable>
        </View>
      )}
    </View>
  )
}

export default SearchBar
