import { FlashList } from '@shopify/flash-list'
import { StyleSheet, View } from 'react-native'

import Container from '~/components/atoms/Container'
import ItemSeparator from '~/components/atoms/ItemSeparator'
import { SearchData } from '~/types/data'

import Result from './Result'

const styles = StyleSheet.create( {
  container: {
    flex: 1,
  },
} )

export type ResultsProps = {
  results: SearchData[],
  onPress?: ( line: SearchData ) => void,
}

const Results = ( {
  results,
  onPress = () => {},
  ...props
}: ResultsProps ) => (
  <View style={styles.container}>
    <FlashList
      {...props}
      estimatedItemSize={100}
      keyboardShouldPersistTaps="always"
      data={results}
      keyExtractor={( { line: { id } } ) => id}
      ItemSeparatorComponent={ItemSeparator}
      ListFooterComponent={() => <Container safeArea bottom />}
      renderItem={( {
        index,
        item: {
          line: {
            id,
            translations,
            gurmukhi,
            sourcePage,
          },
          shabad: {
            source: { nameGurmukhi, pageNameGurmukhi },
          },
        },
      } ) => (
        <Result
          key={id}
          page={`${pageNameGurmukhi} ${sourcePage}`}
          source={nameGurmukhi}
          translation={translations[ 0 ].translation}
          gurmukhi={gurmukhi}
          onPress={() => onPress( results[ index ] )}
        />
      )}
    />
  </View>
)

export default Results
