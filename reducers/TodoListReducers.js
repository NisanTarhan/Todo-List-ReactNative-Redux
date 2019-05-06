import { GET_TODO_LIST, ADD_TODO_LIST, DELETE_TODO_LIST, UPDATE_TODO_LIST, DELETE_ALL_TODO_LIST } from '../actions/types';

const INITIAL_STATE = {
    items: [],
    isCreated: false,
    isDeleted: false,
    isUpdated: false,
    isDeleteAll: false
};

export default (state = INITIAL_STATE, action) => {
    isCreated = false, isDeleted = false, isUpdated = false, isDeleteAll = false;
    switch (action.type) {
        case GET_TODO_LIST:
            return { ...state, items: action.payload };
        case ADD_TODO_LIST:
            return { ...state, items: [...state.items, action.payload], isCreated: true };
        case DELETE_TODO_LIST:
            state.items.splice(action.payload, 1);
            return { ...state, items: [...state.items], isDeleted: true };
        case UPDATE_TODO_LIST:
            state.items[action.payload.index] = action.payload;
            return { ...state, items: [...state.items], isUpdated: true }
        case DELETE_ALL_TODO_LIST:
            return { ...state, items: action.payload, isDeleteAll: true }
        default:
            return state;
    }
};