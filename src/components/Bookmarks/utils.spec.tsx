import { ContentTypes } from '../../types/data'

import { checkIsFolder } from './utils'

describe( 'Bookmarks Utilities', () => {
  it( 'should return false when bookmarks array is not given', () => {
    expect( checkIsFolder( { name: 'test item', id: '0', type: ContentTypes.Bani } ) ).toBe( false )
  } )

  it( 'should return true when bookmarks array is given', () => {
    expect( checkIsFolder( {
      name: 'test item',
      id: '0',
      type: ContentTypes.Bani,
      bookmarks: [
        {
          id: '0',
          type: ContentTypes.Bani,
          name: 'I am an item inside folder',
        },
      ],
    } ) ).toBe( true )
  } )
} )
