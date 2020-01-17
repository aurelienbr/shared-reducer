import { addTodo, updateTodo, deleteTodo } from '../todoService';
import { Todo } from '../../types/Todos';

let todo: Todo;

beforeEach(() => {
  todo = { id: 2, title: 'title todo', description: 'description todo' };
});

it('add todo should return a todo', () => {
  expect(addTodo(todo)).toBe(todo);
});
