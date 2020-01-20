import { todoReducers as reducer } from '../todoReducer';
import { ADD_TODO, UPDATE_TODO, DELETE_TODO } from '../../actions/todoActions';

describe('todoReducer', () => {
  test('it should intialize the default state', () => {
    const initialState = { todos: [] };
    expect(reducer(undefined, { type: '@@INIT', payload: { id: 0, description: '', title: '' } })).toEqual(initialState);
  });

  test('it should handle ADD_TODO', () => {
    const initialState = { todos: [] };
    const finalState = { todos: [{ id: 1, title: 'evian', description: 'une bouteille deau' }] };

    const payload = { id: 1, title: 'evian', description: 'une bouteille deau' };

    const addAction = {
      type: ADD_TODO,
      payload
    };
    expect(reducer(initialState, addAction)).toEqual(finalState);
  });

  test('it should handle UPDATE_TODO', () => {
    const initialState = {
      todos: [
        { id: 1, title: 'android', description: 'un sacré développeur' },
        { id: 2, title: 'evian', description: 'une bouteille deau' }
      ]
    };
    const finalState = {
      todos: [
        { id: 1, title: 'android', description: 'un sacré développeur' },
        { id: 2, title: 'vitel', description: 'une meilleur bouteille deau' }
      ]
    };

    const payload = { id: 2, title: 'vitel', description: 'une meilleur bouteille deau' };

    const updateAction = {
      type: UPDATE_TODO,
      payload
    };

    expect(reducer(initialState, updateAction)).toEqual(finalState);
  });

  test('it should handle DELETE_TODO', () => {
    const initialState = {
      todos: [
        { id: 1, title: 'android', description: 'un sacré développeur' },
        { id: 2, title: 'evian', description: 'une bouteille deau' }
      ]
    };

    const finalState = { todos: [{ id: 1, title: 'android', description: 'un sacré développeur' }] };

    const payload = { id: 2, title: 'evian', description: 'une bouteille deau' };

    const deleteTodo = {
      type: DELETE_TODO,
      payload
    };
    expect(reducer(initialState, deleteTodo)).toEqual(finalState);
  });
});
