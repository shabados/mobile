import React, {Component} from 'react';
import withObservables from '@nozbe/with-observables';
import {Q, Database} from '@nozbe/watermelondb';
import {Container, Header, Content, List, ListItem, Text} from 'native-base';

type SearchResultProps = {
  database: any;
  search: string;
};

class SearchResults extends Component<SearchResultProps> {
  render() {
    return <div></div>;
    // const {searchResults} = this.props;
    // return (
    //   <Container>
    //     {/* <Header /> */}
    //     <Content>
    //       <List>
    //         <ListItem itemDivider>
    //           <Text>Top Results</Text>
    //         </ListItem>
    //         {searchResults.map(searchResult => {
    //           return (
    //             <ListItem>
    //               <Text>{searchResult.gurbani}</Text>
    //             </ListItem>
    //           );
    //         })}
    //       </List>
    //     </Content>
    //   </Container>
    // );
  }
}

// const enhance = withObservables(['search'], ({database, search}) => ({
//   searchResults: database.collections
//     .get('searchresults')
//     .query(Q.where('name', Q.like(`%${Q.sanitizeLikeString(search)}%`))),
// }));

export default SearchResults;
