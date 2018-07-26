import { combineReducers } from 'redux';
import BooksReducer from './reducer_books';
import ActiveBook from './reducer_active_book';
//a root reducer which can have multiple reducers
//adds a key(books) to the global application state[data returned by reducer_books]
const rootReducer = combineReducers({
    books : BooksReducer,
    activeBook : ActiveBook
});

export default rootReducer;