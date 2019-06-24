import React from 'react';
import { shallow } from 'enzyme';
import Home from './Home';
import { fetchBooks } from './actions';

import configureMockStore from 'redux-mock-store';

const mockStore = configureMockStore();

const initialState = { bookListReducer: { isfetching: false, items: { books: [] } } };

let store;

beforeEach(() => {
	store = mockStore(initialState);
});

describe('Home component', () => {
	test('it renders', () => {
		const component = shallow(<Home store={store} />);
		expect(component);
	});

	test('it renders', () => {
		const component = shallow(<Home store={store} />);
		expect(component);
	});
});
