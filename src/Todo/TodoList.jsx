import { useSelector } from "react-redux";
import Todo from "./Todo";

const TodoList = () => {
  const allTodo = useSelector((store) => store.todo);
  console.log(allTodo)
  return (
    <div>
      {allTodo.map((item) => (
        <Todo name={item.name} key={item.id} />
      ))}
    </div>
  );
};

export default TodoList;
