import { createStackNavigator } from '@react-navigation/stack'
import { fireEvent, render } from '@testing-library/react-native'
import { Text } from 'react-native'

import wrapper from '../../../test/utils/NavigatorContext'
import { ContentType } from '../../types/data'
import { CollectionsStackParams, HomeTabParams, RootStackParams } from '../../types/navigation'
import CollectionsScreen, { CollectionsScreenProps } from '.'
import { Folder, FolderContent, FolderItem } from './types'

const getFolderItems = (): FolderItem[] => [
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
]

const CollectionsStack = createStackNavigator<CollectionsStackParams>()
const HomeStack = createStackNavigator<HomeTabParams>()
const RootStack = createStackNavigator<RootStackParams>()

const setup = ( initialParams?: CollectionsScreenProps['route']['params'] ) => render(
  <RootStack.Navigator>
    <RootStack.Screen
      name="Root.Collections"
      component={() => (
        <CollectionsStack.Navigator>
          <CollectionsStack.Screen
            name="Collections.List"
            component={CollectionsScreen}
            initialParams={initialParams}
          />
        </CollectionsStack.Navigator>
      )}
    />

    <RootStack.Screen
      name="Root.Home"
      component={() => (
        <HomeStack.Navigator>
          <HomeStack.Screen
            name="Home.Gurbani"
            component={( { route: { params: { id } } } ) => <Text>{id}</Text>}
          />
        </HomeStack.Navigator>
      )}
    />
  </RootStack.Navigator>,
  { wrapper },
)

describe( '<CollectionsScreen />', () => {
  it( 'should render list of collection items', async () => {
    const items = getFolderItems()
    const { queryByText } = setup( { items } )

    items.forEach( ( { name } ) => {
      expect( queryByText( name ) ).toBeTruthy()
    } )
  } )

  it( 'should open a content item in Home.Gurbani screen', async () => {
    const items = getFolderItems()
    const { getByText } = setup( { items } )

    const secondItem = items[ 1 ] as FolderContent
    fireEvent.press( getByText( secondItem.name ) )

    expect( getByText( secondItem.id ) ).toBeTruthy()
  } )

  it( 'should open a content folder', async () => {
    const items = getFolderItems()
    const { getByText, queryByText } = setup( { items } )
    const firstFolder = items[ 0 ] as Folder

    const folderItem = getByText( firstFolder.name )
    fireEvent.press( folderItem )

    firstFolder.items.forEach( ( { name } ) => {
      expect( queryByText( name ) ).toBeTruthy()
    } )
  } )
} )
