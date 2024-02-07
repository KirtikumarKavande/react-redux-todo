import { ADD_TODO } from "../constant";

export const addTodoAction = (todo) => {
  return {
    type: ADD_TODO,
    payload: { name: todo,id: Math.floor(Math.random() * 10) },
  };
};
