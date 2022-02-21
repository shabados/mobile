import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { fireEvent, render } from '@testing-library/react-native'

import { getNavigationMock, wrapper } from '../../../test/utils/navigation'
import { ContentType } from '../../types/data'
import { CollectionsStackParams } from '../../types/navigation'
import CollectionsScreen, { CollectionsScreenProps } from '.'
import { Folder, FolderContent } from './types'

const getFolder = (): Folder => ( {
  id: '545',
  name: 'root',
  items: [
    {
      id: '1',
      name: 'folder 1',
      items: [
        { id: '123', name: 'shabad 3', type: ContentType.Shabad },
        { id: '124', name: 'bookmark 2', type: ContentType.Bookmark },
        { id: '125', name: 'ang 4', type: ContentType.Ang },
        { id: '234', name: 'nested folder 3', items: [ { id: '34', name: 'shabad 4', type: ContentType.Shabad } ] },
      ],
    },
    {
      id: '4',
      name: 'content bookmark',
      type: ContentType.Bookmark,
    },
  ],
} )

type SetupOptions = Partial<{
  navigation: any,
  route: CollectionsScreenProps['route'],
}>

const setup = ( { navigation, ...props }: SetupOptions = {} ) => {
  const Stack = createNativeStackNavigator<CollectionsStackParams>()

  return render(
    <Stack.Navigator>
      <Stack.Screen name="Collections.List">
        {( screenProps ) => (
          <CollectionsScreen
            {...screenProps}
            {...props}
            navigation={{ ...screenProps.navigation, ...getNavigationMock(), ...navigation }}
          />
        )}
      </Stack.Screen>
    </Stack.Navigator>,
    { wrapper },
  )
}

describe( '<CollectionsScreen />', () => {
  describe( 'on mount', () => {
    it( 'should render list of collection items', async () => {
      const folder = getFolder()
      const { queryByText } = setup( {
        route: { key: '', name: 'Collections.List', params: folder },
      } )

      folder.items.forEach( ( { name } ) => {
        expect( queryByText( name ) ).toBeTruthy()
      } )
    } )
  } )

  describe( 'when a folder item is pressed', () => {
    it( 'should open the item in Home.Gurbani screen', async () => {
      const folder = getFolder()
      const navigation = getNavigationMock()
      const { getByText } = setup( {
        navigation,
        route: { key: '', name: 'Collections.List', params: folder },
      } )

      const secondItem = folder.items[ 1 ] as FolderContent
      fireEvent.press( getByText( secondItem.name ) )

      expect( navigation.navigate ).toHaveBeenCalledWith( 'Root.Home', expect.anything() )
    } )
  } )

  describe( 'when a folder is pressed', () => {
    it( 'should open a content folder', async () => {
      const navigation = getNavigationMock()
      const folder = getFolder()
      const { getByText } = setup( {
        route: { key: '', name: 'Collections.List', params: folder },
        navigation,
      } )
      const firstFolder = folder.items[ 0 ] as Folder

      const folderItem = getByText( firstFolder.name )
      fireEvent.press( folderItem )

      expect( navigation.push ).toHaveBeenCalledWith( 'Collections.List', firstFolder )
    } )
  } )
} )
