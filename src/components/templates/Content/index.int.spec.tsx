import { render, screen, waitForElementToBeRemoved } from '@testing-library/react-native'
import { toUnicode } from 'gurmukhi-utils'
import { atom } from 'jotai'
import { Suspense } from 'react'
import { Text } from 'react-native'

import * as shabads from '~/services/data/shabads'
import { settings } from '~/services/settings'
import * as factories from '~/test/factories'
import { wrapperOptions } from '~/test/utils/wrapper'
import { ShabadData } from '~/types/data'

import ContentTemplate from '.'

type SetupOptions = {
  shabad?: ShabadData,
  readerMode?: boolean,
}

const setup = async ( {
  shabad = factories.shabad.build(),
  readerMode = false,
}: SetupOptions = {} ) => {
  settings.readerMode = atom( readerMode )
  jest.spyOn( shabads, 'getShabad' ).mockResolvedValue( shabad )

  const container = render(
    <Suspense fallback={<Text>Loading</Text>}>
      <ContentTemplate id="1" type="shabad" />
    </Suspense>,
    wrapperOptions( { navigationContainer: true } )
  )

  await waitForElementToBeRemoved( () => screen.queryByText( 'Loading' ) )

  return container
}

describe( '<ContentTemplate />', () => {
  describe( 'on mount', () => {
    it( 'should load and render a target shabad', async () => {
      const shabad = factories.shabad.build()
      await setup( { shabad } )

      expect( await screen.findByText( toUnicode( shabad.lines[ 0 ].gurmukhi ) ) ).toBeTruthy()
      expect( screen.queryByText( shabad.lines[ 0 ].translations[ 0 ].translation ) ).toBeTruthy()
    } )
  } )

  describe( 'given reader mode is enabled', () => {
    it( 'should load and render a target shabad in reader mode', async () => {
      const shabad = factories.shabad.build()
      await setup( { shabad, readerMode: true } )

      expect( await screen.findByText( toUnicode( shabad.lines[ 0 ].gurmukhi ) ) ).toBeTruthy()
      expect( screen.queryByText( shabad.lines[ 0 ].translations[ 0 ].translation ) ).toBeFalsy()
    } )
  } )
} )
