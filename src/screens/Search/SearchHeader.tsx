import { StyleSheet, View } from 'react-native'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'

import SearchBar, { SearchBarProps } from '../../components/SearchBar'
import Units from '../../themes/units'
import { RootStackScreenProps } from '../../types/navigation'

const styles = StyleSheet.create( {
  root: {
    flexDirection: 'row',
    paddingRight: Units.HorizontalLayoutMargin / 2,
  },
  searchBar: {
    flex: 1,
  },
} )

export type SearchHeaderProps = {
  onSearchChange?: SearchBarProps['onChangeText'],
  navigation?: RootStackScreenProps<'Root.Search'>['navigation'],
}

const SearchHeader = ( {
  navigation,
  onSearchChange = () => {},
}: SearchHeaderProps ) => (
  <View style={styles.root}>
    <SearchBar style={styles.searchBar} autoFocus onChangeText={onSearchChange} />

    <HeaderButtons>
      <Item title="Cancel" onPress={() => navigation?.goBack()} />
    </HeaderButtons>
  </View>
)

export default SearchHeader
