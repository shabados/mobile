import 'react-native'
import React from 'react'
import renderer from 'react-test-renderer'

import App from './App'

describe( 'App', () => {
  describe( 'Initial load', () => {
    it( 'Renders without crashing', async () => {
      renderer.create( <App /> )
    } )
  } )
} )
