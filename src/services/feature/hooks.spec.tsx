import { render } from '@testing-library/react-native'
import { Text } from 'react-native'
import { act } from 'react-test-renderer'

import UseFeatureFlagFactory from './hooks'
import { FeatureFlagClient } from './types'

type TestFeatures = { test_feature: 'on' | 'red_stars' }
type DefaultClient = FeatureFlagClient<TestFeatures, never>

const defaultClient: Readonly<DefaultClient> = {
  getStatus: () => 'on',
  isEnabled: () => true,
  isReady: () => true,
  onReady: () => {},
  onUpdate: () => {},
}

type DemoComponentProps = { feature?: keyof TestFeatures }
type SetupParams = { client?: Partial<DefaultClient> } & DemoComponentProps

const setup = ( { client, ...props }: SetupParams ) => {
  const {
    useFeatureEnabled,
    useFeatureStatus,
  } = UseFeatureFlagFactory( { ...defaultClient, ...client } )

  const DemoComponent = ( { feature = 'test_feature' }: DemoComponentProps ) => {
    const isEnabled = useFeatureEnabled( feature )
    const status = useFeatureStatus( feature ) as string

    return isEnabled ? <Text>{`${feature}: ${status}`}</Text> : null
  }

  return render( <DemoComponent {...props} /> )
}

describe( 'useFeatureEnabled', () => {
  describe( 'given the feature service client is ready', () => {
    it( 'should update the value from the feature service when ready', async () => {
      let isEnabled = false
      let fireReady: () => void
      const onReady = ( callback: () => void ) => { fireReady = callback }
      const client: Partial<DefaultClient> = {
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
        const client: Partial<DefaultClient> = {
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
  it( 'should return the status of a flag', () => {
    const client: Partial<DefaultClient> = {
      getStatus: () => 'red_stars',
    }

    const { queryByText } = setup( { client } )

    expect( queryByText( /red_stars/ ) ).toBeTruthy()
  } )
} )
