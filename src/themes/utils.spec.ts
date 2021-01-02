import { mx, my, px, py } from './utils'

describe( 'Styling Utilities', () => {
  describe( 'py()', () => {
    it( 'given no value, should have paddingBottom and paddingTop set to auto', () => {
      expect( py() ).toEqual( { paddingTop: 'auto', paddingBottom: 'auto' } )
    } )

    it( 'given a value of 10, should have paddingBottom and paddingTop set to 10', () => {
      expect( py( 10 ) ).toEqual( { paddingTop: 10, paddingBottom: 10 } )
    } )
  } )

  describe( 'px()', () => {
    it( 'given no value, should have paddingLeft and paddingRight set to auto', () => {
      expect( px() ).toEqual( { paddingLeft: 'auto', paddingRight: 'auto' } )
    } )

    it( 'given a value of 10, should have paddingLeft and paddingRight set to 10', () => {
      expect( px( 10 ) ).toEqual( { paddingLeft: 10, paddingRight: 10 } )
    } )
  } )

  describe( 'mx()', () => {
    it( 'given no value, should have marginLeft and marginLeft set to auto', () => {
      expect( mx() ).toEqual( { marginLeft: 'auto', marginRight: 'auto' } )
    } )

    it( 'given a value of 10, should have paddingLeft and paddingRight set to 10', () => {
      expect( mx( 10 ) ).toEqual( { marginLeft: 10, marginRight: 10 } )
    } )
  } )

  describe( 'my()', () => {
    it( 'given no value, should have marginTop and marginBottom set to auto', () => {
      expect( my() ).toEqual( { marginTop: 'auto', marginBottom: 'auto' } )
    } )

    it( 'given a value of 10, should have marginTop and marginBottom set to 10', () => {
      expect( my( 10 ) ).toEqual( { marginTop: 10, marginBottom: 10 } )
    } )
  } )
} )
