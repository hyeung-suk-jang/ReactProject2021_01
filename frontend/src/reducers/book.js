import produce from 'immer';

export const initialState = {
  books: [],
  borrowBooks: [
    {id:'000000000',title:'DummyBook1'},
    {id:'000000001',title:'DummyBook2'},
    {id:'000000002',title:'DummyBook3'},
    {id:'000000003',title:'DummyBook4'},
  ],
  loadBooksLoading: false,
  loadBooksDone: false,
  loadBooksError: null,
  borrowBookLoading: false,
  borrowBookDone: false,
  borrowBookError: null,
  returnBookLoading: false,
  returnBookDone: false,
  returnBookError: null,
};

export const LOAD_BOOKS_REQUEST = 'LOAD_BOOKS_REQUEST';
export const LOAD_BOOKS_SUCCESS = 'LOAD_BOOKS_SUCCESS';
export const LOAD_BOOKS_FAILURE = 'LOAD_BOOKS_FAILURE';
export const BORROW_BOOK_REQUEST = 'BORROW_BOOK_REQUEST';
export const BORROW_BOOK_SUCCESS = 'BORROW_BOOK_SUCCESS';
export const BORROW_BOOK_FAILURE = 'BORROW_BOOK_FAILURE';
export const RETURN_BOOK_REQUEST = 'RETURN_BOOK_REQUEST';
export const RETURN_BOOK_SUCCESS = 'RETURN_BOOK_SUCCESS';
export const RETURN_BOOK_FAILURE = 'RETURN_BOOK_FAILURE';

const reducer = (state = initialState, action) => produce(state, (draft) => {
    switch (action.type) {
      case LOAD_BOOKS_REQUEST:
        draft.loadBooksLoading = true;
        draft.loadBooksDone = false;
        draft.loadBooksError = null;
        break;
      case LOAD_BOOKS_SUCCESS:
        draft.loadBooksLoading = false;
        draft.loadBooksDone = true;
        draft.books = action.data.root.result.item
        break;
      case LOAD_BOOKS_FAILURE:
        draft.loadBooksLoading = false;
        draft.loadBooksDone = false;
        draft.loadBooksError = action.error;
        break;
      case BORROW_BOOK_REQUEST:
        draft.borrowBookLoading = true;
        draft.borrowBookDone = false;
        draft.borrowBookError = null;
        break;
      case BORROW_BOOK_SUCCESS:
        draft.borrowBookLoading = false;
        draft.borrowBookDone = true;
        draft.borrowBooks.push(action.data)
        break;
      case BORROW_BOOK_FAILURE:
        draft.borrowBookLoading = false;
        draft.borrowBookDone = false;
        draft.borrowBookError = action.error;
        break;
      case RETURN_BOOK_REQUEST:
        draft.returnBookLoading = true;
        draft.returnBookDone = false;
        draft.returnBookError = null;
        break;
      case RETURN_BOOK_SUCCESS:
        draft.returnBookLoading = false;
        draft.returnBookDone = true;
        draft.borrowBooks = draft.borrowBooks.filter((v) => v.id !== action.data.id);
        break;
      case RETURN_BOOK_FAILURE:
        draft.returnBookLoading = false;
        draft.returnBookDone = false;
        draft.returnBookError = action.error;
        break;

      default:
        break;
    }
  });
  
  export default reducer;