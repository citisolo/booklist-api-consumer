import React from 'react';
import styled from 'styled-components';
import BookList from './components/BookList';
import { connect } from 'react-redux';
import { fetchBooks } from './actions';
import { Dimmer, Loader } from 'semantic-ui-react';
import ReactPaginate from 'react-paginate';

const HomeWrapper = styled.div`
    margin: auto 12em auto 12em;
    @media (max-width: 500px) {
        margin: 0;
    } 
`;

const ListWrapper = styled.div`

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
    
`;

class Home extends React.Component {
    constructor(props) {
        super(props);
        const { page, itemsPerPage } = this.props.match.params;
        console.log(page);
        this.state = {
            page: page ? page : '1',
            itemsPerPage: itemsPerPage ? itemsPerPage : '20',
        }
    }

    componentDidMount() {
        const { dispatch } = this.props;
        const { page, itemsPerPage } = this.state;
        dispatch(fetchBooks({ page, itemsPerPage }));
    }

    handlePageClick = data => {
        const { itemsPerPage } = this.state;
        const page = data.selected.toString(10);

        this.setState({ page }, () => {
            this.props.dispatch(fetchBooks({ page, itemsPerPage }))
        });

        this.props.history.push(`/${page}/${itemsPerPage}`);

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
                {isFetching ?
                    (
                        <Dimmer active>
                            <Loader />
                        </Dimmer>
                    ) : (
                        <BookList items={items} />
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


