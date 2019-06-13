import React from 'react';
import styled from 'styled-components';
import BookList from './components/BookList';

const HomeWrapper = styled.div`
    margin: 10em;
`;

const Home = () => (
    <HomeWrapper>
        <BookList/>
    </HomeWrapper>
)

export default Home;
