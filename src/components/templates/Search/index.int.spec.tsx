import { fireEvent, screen } from '@testing-library/react-native'
import { Stack } from 'expo-router'
import { renderRouter } from 'expo-router/testing-library'
import { toUnicode } from 'gurmukhi-utils'
import { Text } from 'react-native'

import * as search from '~/services/data/search'
import * as factories from '~/test/factories'
import { wrapperOptions } from '~/test/utils/wrapper'
import { SearchData } from '~/types/data'

import SearchTemplate from '.'

type SetupOptions = {
  results?: SearchData[],
}

const setup = ( {
  results = factories.search.buildList( 5 ),
}: SetupOptions = {} ) => {
  jest.spyOn( search, 'search' ).mockResolvedValue( results )

  renderRouter( {
    index: () => <SearchTemplate />,
    _layout: () => <Stack />,
    'content/[type]/[id]': () => <Text>Test</Text>,
  }, wrapperOptions( { navigationContainer: false } ) )

  jest.useRealTimers()
}

describe( '<SearchTemplate />', () => {
  describe( 'on mount', () => {
    it( 'should render a search bar', () => {
      setup()

      expect( screen.queryByPlaceholderText( 'Search' ) ).toBeTruthy()
    } )
  } )

  describe( 'on search', () => {
    it( 'should render results', async () => {
      const results = factories.search.buildList( 5 )
      setup( { results } )

      fireEvent.changeText( screen.getByPlaceholderText( 'Search' ), 'hhg' )

      expect( await screen.findByText( toUnicode( results[ 0 ].line.gurmukhi ) ) ).toBeTruthy()
    } )
  } )

  describe( 'on press', () => {
    it( 'should navigate to the Gurbani screen', async () => {
      const results = factories.search.buildList( 1 )
      setup( { results } )

      fireEvent.changeText( screen.getByPlaceholderText( 'Search' ), 'hhg' )
      fireEvent.press( await screen.findByText( toUnicode( results[ 0 ].line.gurmukhi ) ) )

      expect( screen.queryByText( 'Test' ) ).toBeTruthy()
    } )
  } )
} )
