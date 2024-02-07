import { combineReducers, createStore } from "redux";
import Todo from "./reduecrs/Todo.reducer";
const combineToDoReducer = combineReducers({ todo: Todo });

const store = createStore(
  combineToDoReducer,
  {},
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
export default store;
