  
  import React from 'react';
  import { List, Segment, Dimmer, Loader, } from 'semantic-ui-react';
  import { connect } from 'react-redux';
  import { fetchBooks } from '../actions';
  

  class BookList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            page: '1',
        }
    }

    componentDidMount(){
        const { dispatch } = this.props;
        dispatch(fetchBooks({page: '1', itemsPerPage:'20'}));
    }

    handlePageClick = e => {
        e.preventDefault();
        const { dispatch } = this.props;
        dispatch(fetchBooks({page: '1', itemsPerPage:'20'}));
    }

    render(){
      const { isFetching, items } = this.props;

      return (
        <Segment inverted>
        <List divided inverted relaxed>
            { isFetching ? (
            <List.Item>
              <Dimmer active>
                <Loader />
              </Dimmer>               
            </List.Item>
            ) : (
                items.books.map(item => {
                    return (
                    <List.Item>
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
      )
    }
  }


const mapStateToProps = state => {
  const { bookListReducer } = state;
  console.log(state);
  const { isFetching, items } = bookListReducer ;

  return {
    items,
    isFetching,
  }
}

export default connect(mapStateToProps)(BookList);
  
  
  
  
  
  
  
  
  
  
  
  
  
