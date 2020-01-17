import { Todo } from '../../types/Todos';

export const ADD_TODO = 'ADD_TODO';
export const UPDATE_TODO = 'UPDATE_TODO';
export const DELETE_TODO = 'DELETE_TODO';

export type ADD_TODO_ACTION = {
  type: string;
  payload: Todo;
};

export type UPDATE_TODO_ACTION = {
  type: string;
  payload: Todo;
};

export type DELETE_TODO_ACTION = {
  type: string;
  payload: Todo;
};

export function addTodo (payload: Todo): ADD_TODO_ACTION {
  return {
    type: ADD_TODO,
    payload
  };
}

export function updateTodo (payload: Todo): UPDATE_TODO_ACTION {
  return {
    type: UPDATE_TODO,
    payload
  };
}

export function deleteTodo (payload: Todo): DELETE_TODO_ACTION {
  return {
    type: DELETE_TODO,
    payload
  };
}

export type ActionTypes = ADD_TODO_ACTION | UPDATE_TODO_ACTION | DELETE_TODO_ACTION;
