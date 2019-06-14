import { REQUEST_BOOKS, RECEIVE_BOOKS } from '../actions';

export default (state = { isfetching: false, items: { books: [] } }, action) => {
  switch (action.type) {
    case REQUEST_BOOKS:
      return {
        ...state,
        isFetching: true,
      };
    case RECEIVE_BOOKS:
      return {
        ...state,
        isFetching: false,
        items: action.posts,
      };
    default:
      return state;
  }
}
