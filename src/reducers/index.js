import { combineReducers } from 'redux';
import reducerBooks from './reducer_books';
import activeBook from './reducer_active_book'

const rootReducer = combineReducers({
  books: reducerBooks,
  activeBook: activeBook 
});

export default rootReducer;
