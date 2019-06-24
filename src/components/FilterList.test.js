import React from 'react';

import { shallow } from 'enzyme';

import FilterList from './FilterList';

describe('FilterList component', () => {
	test('it renders without crashing', () => {
		const wrapper = shallow(<FilterList />);
		expect(wrapper);
	});
});
