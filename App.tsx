import React, {createContext} from 'react';
import {NavigationContainer, DrawerActions} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {Database} from '@nozbe/watermelondb';
import SearchScreen from './src/screens/SearchScreen';

import SQLiteAdapter from '@nozbe/watermelondb/adapters/sqlite';
import {schema} from './src/models/Schema';
import {dbModels} from './src/models/Index';
import {Container, Header, Content, List, ListItem, Text} from 'native-base';
import DataManager from './src/screens/DataManager';

const adapter = new SQLiteAdapter({
  dbName: 'ShabadOS',
  schema: schema,
});

export const database = new Database({
  adapter,
  modelClasses: dbModels,
  actionsEnabled: true,
});

export const DatabaseContext = createContext(database);
export const {Provider, Consumer} = DatabaseContext;

const Drawer = createDrawerNavigator();

function App() {
  return (
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  );
}

const RootNavigator = () => {
  return (
    <Drawer.Navigator drawerContent={props => DrawerContent(props)}>
      <Drawer.Screen name="Home" component={SearchScreen} />
      <Drawer.Screen name="DataManager" component={DataManager} />
    </Drawer.Navigator>
  );
};

function DrawerContent(props: any) {
  const goTo = (destination: string) => {
    props.navigation.dispatch(DrawerActions.jumpTo(destination));
  };
  return (
    <Container>
      <Header />
      <Content>
        <List>
          <ListItem>
            <Text onPress={() => goTo('Home')}>Home</Text>
          </ListItem>
          <ListItem>
            <Text onPress={() => goTo('DataManager')}>DataManager</Text>
          </ListItem>
        </List>
      </Content>
    </Container>
  );
}
export default App;
