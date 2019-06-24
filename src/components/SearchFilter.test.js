import React from 'react';
import { shallow } from 'enzyme';

import SearchFilter from './SearchFilter';

describe('SearchFilter component', () => {
	test('it renders without crashing', () => {
		const wrapper = shallow(<SearchFilter />);
		expect(wrapper);
	});
});
