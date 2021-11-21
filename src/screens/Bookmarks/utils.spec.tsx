import { ContentType } from '../../types/data'

import { Folder, FolderContent } from './types'
import { getIsFolder } from './utils'

const getFolderContent = (): FolderContent => ( {
  id: '0',
  name: 'test item',
  type: ContentType.Shabad,
} )

describe( 'Bookmarks Utilities', () => {
  it( 'should return false when items are not present on the FolderItem', () => {
    const isFolder = getIsFolder( getFolderContent() )

    expect( isFolder ).toBe( false )
  } )

  it( 'should return true when bookmarks array is given', () => {
    const folder: Folder = {
      id: '1',
      name: 'test folder',
      items: [ getFolderContent() ],
    }

    const isFolder = getIsFolder( folder )

    expect( isFolder ).toBe( true )
  } )
} )
