import React, { useContext, useState } from "react";
import "./utility.css";
import "./Addnote.css";
import { useNavigate } from "react-router-dom";
import noteContext from "../context/notes/NoteContext";

function Editnote(props) {
  const context = useContext(noteContext);
  const { editNote } = context;
  
   
   
  
  let navigate = useNavigate();

  const [note, setNote] = useState({
    id: "",
    etitle:"",
    edescription: "",
    etag: "",
  });
    
  //how to get a single note from notes?***
          

  const handleclick = (e) => {
    e.preventDefault();
    editNote(note.id, note.etitle, note.edescription, note.etag);
    navigate("/");
  };

  const onchange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value });
  };

  return (
    <>
      <div className="body1">
        <form className="formouter1">
          <div className="mb-3">
            <label htmlFor="title" className="form-label">
              <b>Title</b>
            </label>
            <input
              type="text"
              className="form-control"
              id="etitle"
              name="etitle"
              value={note.etitle}
              onChange={onchange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="description" className="form-label">
              <b>Description</b>
            </label>
            <textarea
              className="form-control"
              id="edescription"
              name="edescription"
              rows="10"
              onChange={onchange}
              value={note.edescription}
            ></textarea>
            <div className="mb-3">
              <label htmlFor="tag" className="form-label">
                <b>Tag</b>
              </label>
              <input
                type="text"
                className="form-control"
                id="etag"
                name="etag"
                onChange={onchange}
              />
            </div>
            <div className="button">
              <button
                type="submit"
                className="btn btn-outline-light"
                onClick={handleclick}
              >
                Edit note
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default Editnote;
