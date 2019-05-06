import { combineReducers } from 'redux';
import TodoListReducers from './TodoListReducers'

export default combineReducers({
    todoListResponse: TodoListReducers
});