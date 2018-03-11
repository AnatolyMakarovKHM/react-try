import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux'
import user from './user';
import book from './book';

export default combineReducers({
    routing: routerReducer,
    user,
    book
})