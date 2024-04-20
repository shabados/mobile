import { render, screen } from '@testing-library/react-native'
import { toUnicode } from 'gurmukhi-utils'

import * as factories from '~/test/factories'

import GroupedLines from '.'

describe( '<GroupedLines />', () => {
  const lines = factories.line.buildList( 15 )

  it( 'should render lines', () => {
    render( <GroupedLines lines={lines} /> )

    expect( screen.queryByText( toUnicode( lines[ 0 ].gurmukhi ) ) ).toBeTruthy()
  } )
} )
