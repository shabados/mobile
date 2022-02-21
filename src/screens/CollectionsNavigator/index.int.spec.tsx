import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { render, waitForElementToBeRemoved } from '@testing-library/react-native'
import { toUnicode } from 'gurmukhi-utils'
import { Suspense } from 'react'
import { Text } from 'react-native'

import * as factories from '../../../test/factories'
import { wrapper } from '../../../test/utils/navigation'
import * as collections from '../../services/data/collections'
import { CollectionData } from '../../types/data'
import { RootStackParams } from '../../types/navigation'
import CollectionsNavigator from '.'

const setup = async ( data: CollectionData[] ) => {
  const Stack = createNativeStackNavigator<RootStackParams>()
  jest.spyOn( collections, 'getCollections' ).mockResolvedValue( data )

  const queries = render(
    <Suspense fallback={<Text>Loading</Text>}>
      <Stack.Navigator>
        <Stack.Screen name="Root.Collections" component={CollectionsNavigator} />
      </Stack.Navigator>
    </Suspense>,
    { wrapper }
  )

  const { getByText } = queries
  await waitForElementToBeRemoved( () => getByText( 'Loading' ) )

  return queries
}

describe( '<CollectionsNavigator />', () => {
  it( 'should display a list of collections retrieved', async () => {
    const collections = factories.collection.buildList( 5 )

    const { queryByText } = await setup( collections )

    collections.map(
      ( { nameGurmukhi } ) => expect( queryByText( toUnicode( nameGurmukhi ) ) ).toBeTruthy(),
    )
  } )
} )
