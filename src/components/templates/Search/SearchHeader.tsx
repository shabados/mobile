import { useNavigation } from 'expo-router'
import { Pressable, StyleSheet, Text, View } from 'react-native'

import SearchBar, { SearchBarProps } from '~/components/molecules/SearchBar'
import { commonStrings, useTranslation } from '~/services/i18n'
import { Colors, my, px, py, units } from '~/themes'

const styles = StyleSheet.create( {
  cancelButton: {
    ...my(),
    ...px( units.horizontalLayoutMargin / 2 ),
  },
  root: {
    flexDirection: 'row',
    backgroundColor: Colors.MainView,
    ...py( 8 ),
    ...px( 12 ),
  },
  searchBar: {
    flex: 1,
    marginRight: 8,
  },
} )

export type SearchHeaderProps = {
  onSearchChange?: SearchBarProps['onChangeText'],
}

const SearchHeader = ( { onSearchChange = () => {} }: SearchHeaderProps ) => {
  const { t } = useTranslation()

  const navigation = useNavigation()

  return (
    <View style={styles.root}>
      <SearchBar style={styles.searchBar} autoFocus onChangeText={onSearchChange} />

      <Pressable style={styles.cancelButton} onPress={() => navigation.goBack()}>
        <Text>{t( commonStrings.cancel )}</Text>
      </Pressable>
    </View>
  )
}

export default SearchHeader
