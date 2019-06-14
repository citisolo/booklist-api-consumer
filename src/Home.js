import React from 'react';
import styled from 'styled-components';
import ReactPaginate from 'react-paginate';

import { connect } from 'react-redux';
import { fetchBooks } from './actions';
import { Dimmer, Loader, Button } from 'semantic-ui-react';

import BookList from './components/BookList';
import SearchFilter from './components/SearchFilter';
import FilterList from './components/FilterList';



const HomeWrapper = styled.div` 
    margin: 5em 12em auto 12em;
    @media (max-width: 500px) {
        margin: 0;
    } 
`;

const ListWrapper = styled.div`
    height: 600px;
    overflow-y: auto;
    margin-top: 1em;
`;


const PagerWrapper = styled.div`
    ul {
        display: inline-block;
    }

    li {
        display: inline-block;
        padding: 0.8rem;
    }

    li:hover {
        background-color: blue;
    }
    
`;



class Home extends React.Component {
  constructor(props) {
    super(props);
    const { page, itemsPerPage } = this.props.match.params;
    //console.log(page);
    this.state = {
      page: page ? page : '1',
      itemsPerPage: itemsPerPage ? itemsPerPage : '20',
      filter: []
    }
  }

  componentDidMount() {
    const { dispatch } = this.props;
    const { page, itemsPerPage, filter } = this.state;
    dispatch(fetchBooks({ page, itemsPerPage, filter }));
  }

  handlePageClick = data => {
    const { itemsPerPage, filter } = this.state;
    const pageNum = data.selected + 1;
    const page = pageNum.toString(10);

    this.setState({ page }, () => {
      this.props.dispatch(fetchBooks({ page, itemsPerPage, filter }))
    });

    this.props.history.push(`/${page}/${itemsPerPage}`);

  }

  handleSearchFilter = (data) => {
    const { page, itemsPerPage, filter } = this.state;
    this.setState(state => {
      const newFilter = [...state.filter, data];
      this.props.dispatch(fetchBooks({ page, itemsPerPage, newFilter }))
      return {
        filter: newFilter,

      }
    },/* FIXME:handle side affect properly () => {
            this.props.dispatch(fetchBooks({ page, itemsPerPage, filter }))
        }*/);

    this.props.history.push(`/${page}/${itemsPerPage}`);
  }

  handleFilterRemove = (key) => {
    console.log(key);
    this.setState(state => {
      const newFilter = state.filter.filter((item, itemIndex) => key !== itemIndex)

      return {
        filter: newFilter,
      }
    })
  }

  render() {
    const { isFetching, items } = this.props;
    //calculate the page count
    let pageCount = 0;
    if (items.count) {
      pageCount = Math.ceil(items.count / this.state.itemsPerPage);
    }

    return (
      <HomeWrapper>
        <SearchFilter handleSearch={this.handleSearchFilter} />
        <FilterList list={this.state.filter} removeFilter={this.handleFilterRemove} />
        {isFetching ?
          (
            <ListWrapper>
              <Dimmer >
                <Loader />
              </Dimmer>
            </ListWrapper>
          ) : (
            <ListWrapper>
              <BookList items={items} />
            </ListWrapper>

          )
        }
        <PagerWrapper>
          <ReactPaginate
            previousLabel={'previous'}
            nextLabel={'next'}
            breakLabel={'...'}
            breakClassName={'break-me'}
            pageCount={pageCount}
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
  //console.log(state);
  const { isFetching, items } = bookListReducer;

  return {
    items,
    isFetching,
  }
}

export default connect(mapStateToProps)(Home);


