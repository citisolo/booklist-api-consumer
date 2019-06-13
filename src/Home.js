import React from 'react';
import styled from 'styled-components';
import BookList from './components/BookList';
import { connect } from 'react-redux';
import { fetchBooks } from './actions';

const HomeWrapper = styled.div`
    margin: 10em;
`;


class Home extends React.Component {
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
        <HomeWrapper>
            <BookList isFetching={isFetching} items={items}/>
        </HomeWrapper>
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

export default connect(mapStateToProps)(Home);


