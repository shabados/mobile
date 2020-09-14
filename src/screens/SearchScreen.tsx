import React, { useState, FunctionComponent } from 'react'
import { View } from 'react-native'
import { Container, Header, Input, Left, Form, Item, Icon } from 'native-base'
import { DrawerActions } from '@react-navigation/native'

import SearchResultList from './SearchResultList'
import ShortcutDrawer from '../components/ShortcutDrawer'

type SearchScreenProps = {
  navigation: any;
};

const SearchScreen: FunctionComponent<SearchScreenProps> = ( { navigation } ) => {
  const [ search, setSearch ] = useState( '' )
  const [ pageCount, setPageCount ] = useState( 0 )
  const handleTextChanges = ( v: string ) => {
    setSearch( v )
    setPageCount( 0 )
  }
  const onMenuPress = () => {
    navigation.dispatch( DrawerActions.toggleDrawer() )
  }
  return (
    <Container>
      <Header>
        <Left style={{ marginLeft: 8 }}>
          <Icon active name="menu" onPress={onMenuPress} />
        </Left>
      </Header>
      <View style={{ flex: 1 }}>
        <Form style={{ borderColor: 'green' }}>
          <Item style={{ marginLeft: 0, paddingLeft: 15 }}>
            <Icon active name="search" />
            <Input
              placeholder="Koj"
              style={{ fontFamily: 'OpenGurbaniAkhar-Black', fontSize: 22 }}
              clearButtonMode="always"
              autoCorrect={false}
              autoCapitalize="none"
              onChangeText={handleTextChanges}
            />
          </Item>
        </Form>
        <SearchResultList
          search={search}
          initPageCount={pageCount}
          setInitPageCount={setPageCount}
        />
      </View>
      <ShortcutDrawer />
    </Container>
  )
}
export default SearchScreen
