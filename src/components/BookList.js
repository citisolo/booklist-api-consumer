  
  import React from 'react';
  import { List, Segment, Dimmer, Loader, Button } from 'semantic-ui-react';


  const BookList = ({isFetching, items}) => {
    return (
      <React.Fragment>
          <Segment inverted>
              <List divided inverted relaxed>
                  { isFetching ? (
                  <List.Item>
                  <Dimmer active>
                      <Loader />
                  </Dimmer>               
                  </List.Item>
                  ) : (
                      items.books.map((item, index) => {
                          return (
                          <List.Item key={index}>
                              <List.Content>
                              <List.Header>{item.book_title}</List.Header>
                              {item.book_author[0]}
                              </List.Content>
                          </List.Item> 
                          )
                      })
                  )}
              </List>
          </Segment> 
      </React.Fragment>)
  };



export default BookList;
  
  
  
  
  
  
  
  
  
  
  
  
  
