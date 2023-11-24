import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import {addTodo} from "../../redux/actions/todoActions";
import { actions, getInitialStateAsync } from "../../redux/reducers/todoReducer";
import { notificationSelector } from "../../redux/reducers/notificationReducer";
import { resetNofication } from "../../redux/reducers/notificationReducer";
import { addTodoAsync } from "../../redux/reducers/todoReducer";
import "./ToDoForm.css";

function ToDoForm() {
  const [todoText, setTodoText] = useState("");
  const dispatch = useDispatch();
  const message = useSelector(notificationSelector);

  if(message){
    setTimeout(() => {
      dispatch(resetNofication());
    },2000)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setTodoText("");
    console.log("[TODO]: todo add action dispatch");
    // dispatch(addTodo(todoText));
    // dispatch(actions.add(todoText));
    dispatch(addTodoAsync(todoText));
  };

  return (
    <div className="container">
      {
        message && 
        <div class="alert alert-success" role="alert">
          {message}
        </div>
      }
    
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        className="form-control mb-3"
        value={todoText}
        onChange={(e) => setTodoText(e.target.value)}
      />
      <button className="btn btn-success float-end" type="submit">Create Todo</button>
    </form>
    </div>
  );
}

export default ToDoForm;