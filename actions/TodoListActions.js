import { AsyncStorage } from 'react-native';
import {
  GET_TODO_LIST,
  ADD_TODO_LIST,
  DELETE_TODO_LIST,
  UPDATE_TODO_LIST,
  DELETE_ALL_TODO_LIST
} from './types';

export const getTodoList = () => {
  return (dispatch) => {
    AsyncStorage.getItem('toDoList', (err, result) => {
      if (result !== null) {
        const toDoList = JSON.parse(result)
        console.log('gelene data: ', toDoList);
        dispatch({
          type: GET_TODO_LIST,
          payload: toDoList
        });
      }
    });
  };
};

export const addTodoList = (params) => {
  return (dispatch) => {
    dispatch({
      type: ADD_TODO_LIST,
      payload: params
    });
  };
};

export const deleteTodoList = (index) => {
  return (dispatch) => {
    dispatch({
      type: DELETE_TODO_LIST,
      payload: index
    });
  };
};

export const updateTodoList = (params) => {
  return (dispatch) => {
    dispatch({
      type: UPDATE_TODO_LIST,
      payload: params
    });
  };
};

export const deleteAllTodoList = (params) => {
  return (dispatch) => {
    AsyncStorage.clear();
    dispatch({
      type: DELETE_ALL_TODO_LIST,
      payload: params
    })
  }
}