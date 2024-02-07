import { useDispatch } from "react-redux"
import { removeTodo } from "../actions/todo.actions"

const TodoList = ({name,id}) => {
    const dispatch=useDispatch()
    const deleteTodo=()=>{
        dispatch(removeTodo(id))
    }
    return (
      <div>
          <p>{name}</p>
          <button onClick={deleteTodo}>delete</button>
      </div>
    )
  }
  
  export default TodoList