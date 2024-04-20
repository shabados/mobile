import { render, screen } from '@testing-library/react-native'

import { settings } from '~/services/settings'
import * as factories from '~/test/factories'
import AtomProvider from '~/test/providers/AtomProvider'

import Lines from '.'

describe( '<Lines />', () => {
  describe( 'given reader mode is off', () => {
    it( 'should load and render lines in grouped mode', () => {
      const lines = factories.line.buildList( 15 )

      render(
        <AtomProvider initialValues={[ [ settings.readerMode, false ] ]}>
          <Lines lines={lines} />
        </AtomProvider>
      )

      expect( screen.queryByText( lines[ 0 ].translations[ 0 ].translation ) ).toBeTruthy()
    } )
  } )

  describe( 'given reader mode is on', () => {
    it( 'should load and render lines in reader mode', () => {
      const lines = factories.line.buildList( 15 )

      render(
        <AtomProvider initialValues={[ [ settings.readerMode, true ] ]}>
          <Lines lines={lines} />
        </AtomProvider>
      )

      expect( screen.queryByText( lines[ 0 ].translations[ 0 ].translation ) ).toBeFalsy()
    } )
  } )
} )
