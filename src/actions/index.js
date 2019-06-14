export const REQUEST_BOOKS = 'REQUEST_BOOKS';
export const RECEIVE_BOOKS = 'RECIEVE_BOOKS';

export const requestBooks = books => ({
  type: REQUEST_BOOKS,
  books,
});

export const receiveBooks = (books, json) => ({
  type: RECEIVE_BOOKS,
  books,
  posts: json,
});

export const fetchBooks = books => (dispatch) => {
  // console.log(books);
  dispatch(requestBooks(books));
  const url = 'http://nyx.vima.ekt.gr:3000/api/books/';
  return fetch(
    url,
    {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        page: books.page,
        // itemsPerPage: books.itemsPerPage, //FIXME:Getting a 500 error here for some reason
        filter: books.filter,
      }),
    },
  )
    .then(response => response.json())
    .then(json => dispatch(receiveBooks(books, json)))
    .catch(response => console.log(`response: ${response}`));
};
