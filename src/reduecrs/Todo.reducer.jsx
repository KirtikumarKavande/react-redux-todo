import {ADD_TODO,Remove_TODO,EDIT_TODO} from "../constant/index"
const todo=[
    {
        id:1,
        name:"cricket game",
    
    },
    {
        id:2,
        name:"studying react",
    
    }
]
const Todo = (state=todo, action) => {

    if(action.type===ADD_TODO)
    {
      return [...state,action.payload]
    }else if(action.type===Remove_TODO)
    {

    }else if(action.type===EDIT_TODO){

    }
    return state
};

export default Todo;
