import React,{useContext} from 'react';
import "./Home.css";
import "./Noteitem.css";
import { useNavigate } from "react-router-dom";
import { Link} from "react-router-dom";
import noteContext from "../context/notes/NoteContext";




function Noteitem(props) {

  const {note} = props;
  const context= useContext(noteContext);

  const {deleteNote} =context;
  let navigate = useNavigate();


  const updateNote = () => {
    
    navigate("/editnote");
}

  
  return (
    <>
    <div className="col-md-2">
     <div className="note1 mx-2 mb-3">
           <h5 className='position1'>Title</h5>
           <div className='position3'>
             <p>{note.title}</p>
           </div>

           <Link className="btn btn-primary mx-2 position2 btn-sm" to="/note" type="submit">
             Read note
             </Link>
           <i className="fa-regular fa-trash-can position4" onClick={()=>{deleteNote(note._id)}}></i>
         <i className="fa-solid fa-file-pen position5" onClick={()=>{updateNote(note)}}/>
          
       
         
          </div>
          </div>
    </>
  )
}

export default Noteitem