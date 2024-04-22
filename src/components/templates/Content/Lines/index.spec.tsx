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
    //! This test is failing because the ReaderLines component is not being rendered
    // This is because the reader mode is coming back as false, even though it should be true
    // Almost certainly due to the storage.onMount() call in the kv-storage atom
    it.skip( 'should load and render lines in reader mode', async () => {
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
