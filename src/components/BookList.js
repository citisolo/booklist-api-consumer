import React from 'react';
import PropTypes from 'prop-types';
import { List, Segment } from 'semantic-ui-react';
import uniqid from 'uniqid';

const BookList = ({ items }) => {
	return (
		<React.Fragment>
			<Segment inverted>
				<List divided inverted relaxed>
					{items.books.map((item, index) => {
						return (
							<List.Item key={uniqid('book-')}>
								<List.Content>
									<List.Header>{item.book_title}</List.Header>
									{item.book_author[0]}
								</List.Content>
							</List.Item>
						);
					})}
				</List>
			</Segment>
		</React.Fragment>
	);
};

BookList.propTypes = {
	items: PropTypes.shape({
		books: PropTypes.arrayOf(PropTypes.object),
		count: PropTypes.number,
	}),
};

BookList.defaultProps = {
	items: { books: [] },
};

export default BookList;
