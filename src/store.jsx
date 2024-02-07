import { createStore } from "redux";
import Todo from "./reduecrs/Todo.reducer";

const store=createStore(Todo,{})
export default store