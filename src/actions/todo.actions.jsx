import { ADD_TODO } from "../constant";

export const addToAction = (todo) => {
  return {
    type: ADD_TODO,
    payload: { name: todo },
  };
};
