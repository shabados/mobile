import React, { FunctionComponent, useState } from 'react'
import {
  Text,
  Container,
  Header,
  Left,
  Icon,
  Content,
  List,
  ListItem,
  Body,
  Right,
} from 'native-base'
import { DrawerActions } from '@react-navigation/native'
import {
  synchronize,
  SyncPullArgs,
  Timestamp,
  SyncDatabaseChangeSet,
} from '@nozbe/watermelondb/sync'
import SearchResult from 'src/models/SearchResult'
import useDatabase from '../hooks/use-database'

type DataManagerProps = {
  navigation: any;
};

type DataSyncProps = {
  continuationToken: any | undefined;
};

const DataManager: FunctionComponent<DataManagerProps> = ( { navigation } ) => {
  const [ continuationToken, setContinuationToken ] = useState( {} )
  const onMenuPress = () => {
    navigation.dispatch( DrawerActions.toggleDrawer() )
  }
  const onDownloadPress = async () => {
    const res = await dataSync( { continuationToken } )
    setContinuationToken( res )
  }
  const database = useDatabase()
  const dataSync = async ( { continuationToken }: DataSyncProps ) => {
    await synchronize( {
      database,
      pullChanges: async ( args: SyncPullArgs ) => {
        // Alert.alert('Started');
        const timestamp: Timestamp = args.lastPulledAt ?? new Date().getUTCDate()
        const response = await fetch(
          'http://localhost:5000/api/shabad/sync/searchTerms',
        )

        // Alert.alert(JSON.stringify(response));
        if ( !response.ok ) {
          throw new Error( await response.text() )
        }

        const mappedResults: SearchResult[] = []
        const results = await response.json()
        continuationToken = results.continuationToken
        results.lineSearchResults.forEach( ( result: any ) => {
          const ret: any = {
            id: `${result.searchTerm}_${result.id}`,
            searchTerm: result.searchTerm,
            section: 'Empty',
            ang: 123,
            gurbani: result.gurmukhi.toString(),
            translation: 'Empty',
          }
          mappedResults.push( ret )
        } )
        const changes: SyncDatabaseChangeSet = {
          searchResults: {
            created: mappedResults,
            updated: [],
            deleted: [],
          },
        }
        return { changes, timestamp }
      },
      pushChanges: async () => {},
    } )
    return continuationToken
  }
  return (
    <Container>
      <Header>
        <Left style={{ marginLeft: 8 }}>
          <Icon active name="menu" onPress={onMenuPress} />
        </Left>
      </Header>
      <Content>
        <List>
          <ListItem itemHeader first>
            <Text>Downloaded</Text>
          </ListItem>
          <ListItem icon>
            <Left>
              <Icon active name="globe" />
            </Left>
            <Body>
              <Text>Sri Guru Granth Sahib Ji</Text>
            </Body>
            <Right>
              <Icon
                active
                name="ios-cloud-download"
                onPress={onDownloadPress}
              />
            </Right>
          </ListItem>

          <ListItem itemHeader>
            <Text>Available For Download</Text>
          </ListItem>
          <ListItem icon>
            <Left>
              <Icon active name="globe" />
            </Left>
            <Body>
              <Text>Bhai Gurdaas Ji Varan</Text>
            </Body>
            <Right>
              <Icon name="cloud-download" />
            </Right>
          </ListItem>
        </List>
      </Content>
    </Container>
  )
}
export default DataManager
