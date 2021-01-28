import produce from 'immer';

export const initialState = {
    books:[],
    loadBooksLoading: false,
    loadBooksDone: false,
    loadBooksError: null,  
  };

export const LOAD_BOOKS_REQUEST = 'LOAD_BOOKS_REQUEST';
export const LOAD_BOOKS_SUCCESS = 'LOAD_BOOKS_SUCCESS';
export const LOAD_BOOKS_FAILURE = 'LOAD_BOOKS_FAILURE';

const dummy = {
    root:{
        result:{
            item:[
                {id:1,
                title:'DummyTitle',
                author:'DummyAuthor',
                year:2021,
                reg_date:1991,
                pub: 'DummyPub',
                call:'Dummy-ddddd',
                place:'DummyPlace'}
            ]
        }
    }
}

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
        console.log('Hello Data', action.data.root.result)
        draft.books = action.data.root.result.item
        break;
      case LOAD_BOOKS_FAILURE:
        draft.loadBooksLoading = false;
        draft.loadBooksDone = false;
        draft.loadBooksError = action.error;
        break;

      default:
        break;
    }
  });
  
  export default reducer;