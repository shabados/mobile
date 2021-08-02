import { checkIsFolder } from './utils'

describe( 'Bookmarks Utilities', () => {
  it( 'should return false when bookmarks array is not given', () => {
    expect( checkIsFolder( { name: 'test item' } ) ).toBe( false )
  } )

  it( 'should return true when bookmarks array is given', () => {
    expect( checkIsFolder( {
      name: 'test item',
      bookmarks: [
        {
          name: 'I am an item inside folder',
        },
      ],
    } ) ).toBe( true )
  } )
} )
