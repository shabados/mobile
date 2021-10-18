import { expect, by } from 'detox'

describe( 'Home', () => {
  beforeAll( async () => {
    await device.launchApp( { newInstance: true } )
  } )

  beforeEach( async () => {
    await device.reloadReactNative()
  } )

  it( 'should have home screen', async () => {
    await expect( element( by.text( 'Shabad OS' ) ) ).toBeVisible()
  } )
} )
