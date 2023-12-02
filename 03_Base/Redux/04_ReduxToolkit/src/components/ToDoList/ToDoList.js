import { useSelector, useDispatch } from "react-redux";
import { toggleTodo } from "../../redux/actions/todoActions";
import { actions } from "../../redux/reducers/todoReducer";

import "./ToDoList.css";
import { todoSelector } from "../../redux/reducers/todoReducer";

function ToDoList() {

  // const todos=useSelector((state)=> state.todoReducer.todos);
  const todos = useSelector(todoSelector)
  //if you change the name of todoReducer  you have to go to each component to change the name 
  console.log(todos);
  const disptach = useDispatch();
  // const todos= store.getState().todos;

  return (
    <div className="container">
    <ul>
      {todos.map((todo,index) => (
        <li key={index}>
          <span className="content">{todo.text}</span>
          <span className={todo.completed ? 'completed':'pending'}>{todo.completed ? 'Completed': 'Pending'}</span>
          <button className="btn btn-warning"
          onClick={()=>{disptach(actions.toggle(index))}}
          >Toggle</button>
          </li>
      ))}
    </ul>
    </div>
  );
}

export default ToDoList;