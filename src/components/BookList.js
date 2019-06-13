  
  import React from 'react';
  import { List, Segment } from 'semantic-ui-react';
  import { connect } from 'react-redux';
  

  const BookList = ( { items } ) => {

    return (
      <React.Fragment>
          <Segment inverted>
              <List divided inverted relaxed>
                  {
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
                  }
              </List>
          </Segment> 
      </React.Fragment>)
  }


export default BookList;
  
  
  
  
  
  
  
  
  
  
  
  
  
