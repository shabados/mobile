import { StyleSheet, View } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'

import BackButton from '../../components/BackButton'
import Navbar from '../../components/Navbar'
import SearchBar, { SearchBarProps } from '../../components/SearchBar'

const styles = StyleSheet.create( {
  back: {
    width: 30,
  },
  backIcon: {
    fontSize: 28,
  },
  root: {
    flex: 1,
    flexDirection: 'row',
  },
  searchBar: {
    flex: 1,
    marginRight: 20,
  },
} )

export type SearchNavbarProps = {
  /**
   * Fired with the text value when the search changes.
   */
  onSearchChange?: SearchBarProps['onChangeText'],
}

/**
 * Navbar component for main header.
 */
const SearchNavbar = ( {
  onSearchChange = () => {},
}: SearchNavbarProps ) => (
  <Navbar
    backgroundColor="transparent"
    main={(
      <View style={styles.root}>
        <BackButton testID="back-button" style={styles.back} variant="text" label={<Icon style={styles.backIcon} name="arrow-back" />} />

        <SearchBar style={styles.searchBar} autoFocus onChangeText={onSearchChange} />
      </View>
    )}
  />
)

export default SearchNavbar
