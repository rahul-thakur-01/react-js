import "./NoteList.css";
import { UseSelector, useSelector } from "react-redux/es/hooks/useSelector";
import { deleteNote } from "../../redux/actions/noteActions";
import { useDispatch } from "react-redux";


function NoteList() {
    // const notes=[];
    const notes = useSelector((state) => state.noteReducer.notes);
    console.log(notes);
    const dispatch1 = useDispatch();
    function handleDelete (index){
      dispatch1(deleteNote(index));
    }
  return (
    <div className="container">
    <ul>
      {notes.map((note,index) => (
        <li key={index}>
            {/* <p>{note.createdOn.toLocaleDateString()}</p> */}
            <p className="note-content">{note.text}</p>
            <button className="btn btn-danger" onClick={()=>handleDelete(index)}>Delete</button>
            </li>
      ))}
    </ul>
    </div>
  );
}

export default NoteList;
