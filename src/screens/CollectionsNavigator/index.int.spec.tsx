import { render, waitForElementToBeRemoved } from '@testing-library/react-native'
import { toUnicode } from 'gurmukhi-utils'
import { Suspense } from 'react'
import { Text } from 'react-native'

import * as factories from '../../../test/factories'
import wrapper from '../../../test/utils/NavigatorContext'
import withContexts from '../../components/with-contexts'
import * as collections from '../../services/data/collections'
import { CollectionData } from '../../types/data'
import CollectionsNavigator from '.'

const setup = async ( data: CollectionData[] ) => {
  jest.spyOn( collections, 'getCollections' ).mockResolvedValue( data )

  const queries = render( withContexts(
    <Suspense fallback={<Text>Loading</Text>}>
      <CollectionsNavigator />
    </Suspense>,
  ), { wrapper } )

  const { getByText } = queries
  await waitForElementToBeRemoved( () => getByText( 'Loading' ) )

  return queries
}

describe( '<CollectionsNavigator />', () => {
  describe( 'on mount', () => {
    it( 'should display a list of collections retrieved', async () => {
      const collections = factories.collection.buildList( 5 )

      const { queryByText } = await setup( collections )

      collections.map(
        ( { nameGurmukhi } ) => expect( queryByText( toUnicode( nameGurmukhi ) ) ).toBeTruthy(),
      )
    } )
  } )
} )
