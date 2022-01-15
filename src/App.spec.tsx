import { render } from '@testing-library/react-native'

import App from './App'

describe( 'App', () => {
  describe( 'Initial load', () => {
    it( 'Renders without crashing', async () => {
      render( <App /> )
    } )
  } )
} )
