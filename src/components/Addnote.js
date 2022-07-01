import React,{useState,useContext} from "react";
import "./utility.css";
import "./Addnote.css";
import { useNavigate } from "react-router-dom";
import noteContext from "../context/notes/NoteContext";


function Addnote() {

  const context= useContext(noteContext);
  const {addNote} =context;

  const [note, setnote] = useState({title:"",description:"",tag:""})

  let navigate = useNavigate();

    const handleclick = (e)=>{
      e.preventDefault();
        addNote(note.title,note.description,note.tag)
       navigate("/");
    }

    const onchange =(e)=>{
          setnote({...note,[e.target.name]:e.target.value})
    }
  return (
    <>
      <div className="body1">
        <form className="formouter1" >
          <div className="mb-3">
            <label htmlFor="title" className="form-label">
               <b>Title</b> 
            </label>
            <input type="text" className="form-control" id="title" name="title" value={note.title}  onChange={onchange}  minLength={5} required/>
          </div>
          <div className="mb-3">
            <label htmlFor="description" className="form-label">
            <b>Description</b>
            </label>
            <textarea
              className="form-control"
              id="description"
              name="description"
              rows="10"
              value={note.description}
              onChange={onchange}
              minLength={5} required
            ></textarea>
            <div className="mb-3">
              <label htmlFor="tag" className="form-label">
                <b>Tag</b>
              </label>
              <input type="text" className="form-control" id="tag" name="tag" value={note.tag}  onChange={onchange}  minLength={3} required/>
            </div>
            <div className="button">
              <button type="submit" className="btn btn-outline-light" onClick={handleclick}>
                Save note
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default Addnote;
