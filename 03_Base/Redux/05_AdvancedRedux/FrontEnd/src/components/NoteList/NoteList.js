import "./NoteList.css";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getInitialStateAsync } from "../../redux/reducers/noteReducer";

// import { deleteNote } from "../../redux/actions/noteActions";
import { actions } from "../../redux/reducers/noteReducer";
import { noteSelector } from "../../redux/reducers/noteReducer";
import { deleteNoteAsync } from "../../redux/reducers/noteReducer";



function NoteList() {
    // const notes=useSelector((state)=> state.noteReducer.notes);
    const notes = useSelector(noteSelector);
    const dispatch=useDispatch();

    useEffect(()=>{
      dispatch(getInitialStateAsync());
    },[])


  return (
    <div className="container">
    <ul>
      {notes.map((note,index) => (
        <li>
            <p>{note.createdOn} </p>
            <p className="note-content">{note.text}</p>
            <button className="btn btn-danger"
            // onClick={()=> dispatch(deleteNote(index))}>Delete</button>
            // onClick={()=> dispatch(actions.delete(index))}>

            onClick={()=> dispatch(deleteNoteAsync(index))}>
              Delete</button>
            </li>
      ))}
    </ul>
    </div>
  );
}

export default NoteList;
