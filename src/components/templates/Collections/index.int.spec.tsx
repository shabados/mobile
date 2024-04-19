import { fireEvent, screen, waitFor } from '@testing-library/react-native'
import { renderRouter } from 'expo-router/testing-library'
import { Text } from 'react-native'

import * as collectionsApi from '~/services/data/collections/default'
import * as factories from '~/test/factories'
import { wrapperOptions } from '~/test/utils/wrapper'
import { CollectionItem } from '~/types/data'

import CollectionsTemplate from '.'

type SetupOptions = {
  items?: CollectionItem[],
}

const setup = ( {
  items = factories.collectionFolder.buildList( 5 ),
}: SetupOptions = {} ) => {
  jest.spyOn( collectionsApi, 'default' ).mockReturnValue( items )

  renderRouter( {
    index: () => <CollectionsTemplate />,
    'collections/[...path]': () => <Text>folder</Text>,
    'content/[type]/[id]': () => <Text>content</Text>,
  }, wrapperOptions() )

  jest.useRealTimers()
}

describe( '<CollectionsTemplate />', () => {
  describe( 'on mount', () => {
    it( 'should render list of collection items', async () => {
      const items = factories.collectionFolder.buildList( 5 )

      setup( { items } )

      await waitFor( () => {
        items.forEach( ( { id } ) => {
          expect( screen.queryByTestId( id ) ).toBeTruthy()
        } )
      } )
    } )
  } )

  describe( 'when a content item is pressed', () => {
    it( 'should open the item on the Content screen', async () => {
      const items = factories.collectionShabad.buildList( 5 )
      setup( { items } )

      const [ , { id } ] = items
      fireEvent.press( await screen.findByTestId( id ) )

      expect( await screen.findByText( 'content' ) ).toBeTruthy()
    } )

    describe( 'when a folder is pressed', () => {
      it( 'should open a content folder', async () => {
        const items = factories.collectionFolder.buildList( 5 )
        setup( { items } )

        const [ , { id } ] = items
        fireEvent.press( await screen.findByTestId( id ) )

        expect( await screen.findByText( 'folder' ) ).toBeTruthy()
      } )
    } )
  } )
} )
