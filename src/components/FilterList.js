import React from 'react';
import PropTypes from 'prop-types';
import { Label, Icon } from 'semantic-ui-react';

const FilterList = ({ list, removeFilter }) => (
	<div>
		{list.map((item, index) => (
			// FIXME: fix this
			// eslint-disable-next-line react/no-array-index-key
			<Label key={index} image>
				{item.values}
				<Icon name="delete" onClick={() => removeFilter(index)} />
			</Label>
		))}
	</div>
);

FilterList.propTypes = {
	list: PropTypes.arrayOf(PropTypes.object),
};

FilterList.defaultProps = {
	list: [],
};

export default FilterList;
