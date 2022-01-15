import { render } from '@testing-library/react-native'
import { Text } from 'react-native'
import { act } from 'react-test-renderer'

import UseFeatureFlagFactory from './hooks'
import { Feature, FeatureFlagClient } from './types'

const defaultClient: Readonly<FeatureFlagClient> = {
  getStatus: (): any => 'on',
  isEnabled: () => true,
  isReady: () => true,
  onReady: () => {},
  onUpdate: () => {},
  setDefaultAttributes: () => {},
}

type DemoComponentProps = { feature?: string }
type SetupParams = { client?: Partial<FeatureFlagClient> } & DemoComponentProps

const setup = ( { client, ...props }: SetupParams ) => {
  const {
    useFeatureEnabled,
    useFeatureStatus,
  } = UseFeatureFlagFactory( { ...defaultClient, ...client } )

  const DemoComponent = ( { feature = 'test_feature' }: DemoComponentProps ) => {
    const isEnabled = useFeatureEnabled( feature as Feature )
    const status = useFeatureStatus( feature as Feature )

    return isEnabled ? <Text>{`${feature}: ${status}`}</Text> : null
  }

  return render( <DemoComponent {...props} /> )
}

describe( 'useFeatureEnabled', () => {
  describe( 'given the feature service client is not ready', () => {
    it( 'should return a non-truthy value', () => {
      const client: Partial<FeatureFlagClient> = {
        isReady: () => false,
        isEnabled: () => false,
      }

      const { queryByText } = setup( { client } )

      expect( queryByText( /test_feature/ ) ).toBeFalsy()
    } )
  } )

  describe( 'given the feature service client is ready', () => {
    it( 'should update the value from the feature service when ready', async () => {
      let isEnabled = false
      let fireReady: () => void
      const onReady = ( callback: () => void ) => { fireReady = callback }
      const client: Partial<FeatureFlagClient> = {
        isEnabled: () => isEnabled,
        isReady: () => false,
        onReady,
      }
      const { queryByText, findByText } = setup( { client } )

      expect( queryByText( /test_feature/ ) ).toBeFalsy()

      isEnabled = true
      act( () => fireReady() )

      expect( await findByText( /test_feature/ ) ).toBeTruthy()
    } )

    describe( 'given a feature is enabled', () => {
      it( 'should return true', () => {
        const client: Partial<FeatureFlagClient> = {
          isReady: () => true,
          isEnabled: () => true,
        }

        const { queryByText } = setup( { client } )

        expect( queryByText( /test_feature/ ) ).toBeTruthy()
      } )
    } )
  } )
} )

describe( 'useFeatureStatus', () => {
  describe( 'given the feature service client is ready', () => {
    it( 'should return the status of a flag', () => {
      const client: Partial<FeatureFlagClient> = {
        getStatus: (): any => 'red_stars',
      }

      const { queryByText } = setup( { client } )

      expect( queryByText( /red_stars/ ) ).toBeTruthy()
    } )
  } )
} )
