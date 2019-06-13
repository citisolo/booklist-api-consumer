import React from 'react';
import styled from 'styled-components';
import BookList from './components/BookList';
import { connect } from 'react-redux';
import { fetchBooks } from './actions';
import ReactPaginate from 'react-paginate';

const HomeWrapper = styled.div`
    margin: 10em;
`;

const PagerWrapper = styled.div`
    ul {
        display: inline-block;
    }

    li {
        display: inline-block;
        border-style: solid;
        padding: 0.8rem;
        border-width: 0.1px;
    }

    li:hover {
        background-color: blue;
    }
`

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            page: '1',
            pageCount: 100,
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
            <PagerWrapper>
                <ReactPaginate 
                    previousLabel={'previous'}
                    nextLabel={'next'}
                    breakLabel={'...'}
                    breakClassName={'break-me'}
                    pageCount={this.state.pageCount}
                    marginPagesDisplayed={2}
                    pageRangeDisplayed={5}
                    onPageChange={this.handlePageClick}
                    containerClassName={'pagination'}
                    subContainerClassName={'pages pagination'}
                    activeClassName={'active'}
                />
            </PagerWrapper>
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


