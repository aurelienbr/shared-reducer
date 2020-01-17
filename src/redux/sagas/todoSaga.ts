import { takeLatest } from 'redux-saga/effects';

import { ADD_TODO, UPDATE_TODO, DELETE_TODO } from '../actions/todoActions';

export default function * todoSaga () {
  yield takeLatest(ADD_TODO, addTodo);
  yield takeLatest(UPDATE_TODO, updateTodo);
  yield takeLatest(DELETE_TODO, deleteTodo);
}

// eslint-disable-next-line @typescript-eslint/no-empty-function
function * addTodo () {}

// eslint-disable-next-line @typescript-eslint/no-empty-function
function * updateTodo () {}

// eslint-disable-next-line @typescript-eslint/no-empty-function
function * deleteTodo () {}
