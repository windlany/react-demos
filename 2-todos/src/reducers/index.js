import { combineReducers } from 'redux';
import todos from './todos';
import visibilityFilter from './visibilityFilter';

// state = {
//     todos: [],
//     visibilityFilter: 'SHOW_ALL'
// }

export default combineReducers({
    todos,
    visibilityFilter
})