import React from 'react';
import { shallow } from 'enzyme';
import { List } from 'semantic-ui-react';

import BookList from './BookList';

describe('BookList component', () => {
	test('it renders without crashing', () => {
		const wrapper = shallow(<BookList />);
		expect(wrapper);
	});

	test('it renders all items', () => {
		const list = [...Array(20)].map(() => ({ book_author: '', book_pages: '', book_title: '' }));
		const items = { books: list, count: 20 };
		const wrapper = shallow(<BookList items={items} />);
		expect(wrapper.find(List.Item).length).toBe(20);
	});
});
