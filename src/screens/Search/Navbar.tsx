import { StyleSheet, View } from 'react-native'

import BackButtonIcon from '../../components/BackButtonIcon'
import Navbar from '../../components/Navbar'
import SearchBar, { SearchBarProps } from '../../components/SearchBar'
import Units from '../../themes/units'

const styles = StyleSheet.create( {
  root: {
    flexDirection: 'row',
  },
  searchBar: {
    flex: 1,
    marginRight: Units.HorizontalLayoutMargin,
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
        <BackButtonIcon />

        <SearchBar style={styles.searchBar} autoFocus onChangeText={onSearchChange} />
      </View>
    )}
  />
)

export default SearchNavbar
