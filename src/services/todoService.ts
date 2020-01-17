/* eslint-disable no-new */
import { Todo } from '../types/Todos';

/*
    new Promise(function(resolve, reject) {
    setTimeout(function() {
        resolve(Todo);
    }, 1000);
    });
*/

// fake un service qui retourne le todo ajouté après 1 s
export const addTodo = (todo: Todo) => {
  new Promise(function (resolve) {
    setTimeout(function () {
      resolve(todo);
    }, 1000);
  });
};

// fake un service qui retourne le todo ajouté après 1 s
export const updateTodo = () => 1;

// fake un service qui retourne le todo ajouté après 1 s
export const deleteTodo = () => 1;
