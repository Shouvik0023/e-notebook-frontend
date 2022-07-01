import React,{useContext} from 'react';
import noteContext from '../context/notes/NoteContext';
import "./Note.css"
import "./utility.css";

function Note() {

    const context= useContext(noteContext);
  const {notes} =context;
  return (
    <>
      <div className="body1">
           <div className="outer">
               <h4>Title</h4>
               <h5>{notes.title}</h5>
               <h4>Description</h4>
               <h5>{notes.description}</h5>
               <h4>Tag</h4>
               <h5>{notes.tag}</h5>
           </div>
      </div>
    </>
  )
}

export default Note