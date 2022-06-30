import React from "react";
import "./utility.css";
import "./Addnote.css";

function Addnote() {

    const handlesubmit = ()=>{

    }
  return (
    <>
      <div className="body1">
        <form className="formouter1" onSubmit={handlesubmit}>
          <div className="mb-3">
            <label htmlFor="title" className="form-label">
               <b>Title</b> 
            </label>
            <input type="text" className="form-control" id="title" name="title" />
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
            ></textarea>
            <div className="mb-3">
              <label htmlFor="tag" className="form-label">
                <b>Tag</b>
              </label>
              <input type="text" className="form-control" id="tag" name="tag" />
            </div>
            <div className="button">
              <button type="submit" className="btn btn-outline-light">
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
