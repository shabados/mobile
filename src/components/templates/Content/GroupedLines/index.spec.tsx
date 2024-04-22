import { render, screen } from '@testing-library/react-native'
import { toUnicode } from 'gurmukhi-utils'

import * as factories from '~/test/factories'
import nextTick from '~/test/utils/next-tick'

import GroupedLines from '.'

describe( '<GroupedLines />', () => {
  const lines = factories.line.buildList( 15 )

  it( 'should render lines', () => {
    render( <GroupedLines lines={lines} /> )

    expect( screen.queryByText( toUnicode( lines[ 0 ].gurmukhi ) ) ).toBeTruthy()
  } )

  describe( 'given an initial line id', () => {
    // Does not work with FlashList
    it.skip( 'should render lines starting from the initial line id', () => {
      const initialIndex = 5
      const initialLineId = lines[ initialIndex ].id

      render( <GroupedLines lines={lines} initialLineId={initialLineId} /> )

      expect( screen.queryByText( toUnicode( lines[ initialIndex ].gurmukhi ) ) ).toBeTruthy()
    } )
  } )
} )
