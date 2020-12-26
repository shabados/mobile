import { px, py } from './utils'

describe( 'Styling Utilities', () => {
  it( 'should have paddingBottom and paddingTop set to auto', () => {
    expect( py() ).toStrictEqual( { paddingTop: 'auto', paddingBottom: 'auto' } )
  } )

  it( 'should have paddingBottom and paddingTop set to 10', () => {
    expect( py( 10 ) ).toStrictEqual( { paddingTop: 10, paddingBottom: 10 } )
  } )

  it( 'should have paddingLeft and paddingRight set to auto', () => {
    expect( px() ).toStrictEqual( { paddingLeft: 'auto', paddingRight: 'auto' } )
  } )

  it( 'should have paddingLeft and paddingRight set to 10', () => {
    expect( px( 10 ) ).toStrictEqual( { paddingLeft: 10, paddingRight: 10 } )
  } )
} )
