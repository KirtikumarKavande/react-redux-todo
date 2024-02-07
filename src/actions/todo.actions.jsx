import { ADD_TODO, Remove_TODO } from "../constant";

export const addTodoAction = (todo) => {
  return {
    type: ADD_TODO,
    payload: { name: todo, id: Math.floor(Math.random() * 10) },
  };
};

export const removeTodo = (id) => {
  return {
    type: Remove_TODO,
    id: id,
  };
};
