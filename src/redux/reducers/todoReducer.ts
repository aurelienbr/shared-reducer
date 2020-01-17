import { ADD_TODO, UPDATE_TODO, DELETE_TODO, ActionTypes } from '../actions/todoActions';
import { Todo } from '../../types/';

import { deleteObjectInArray, updateObjectInArray, addObjectInArray } from './../../utils/objectUtils';

export type State = {
  todos: Array<Todo>;
};

const initialState: State = {
  todos: []
};

export default function (state: State = initialState, action: ActionTypes): State {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: addObjectInArray(state.todos, action.payload)
      };
    case UPDATE_TODO:
      return { ...state, todos: updateObjectInArray(state.todos, action.payload) };
    case DELETE_TODO:
      return { ...state, todos: deleteObjectInArray(state.todos, action.payload) };
    default:
      return state;
  }
}
