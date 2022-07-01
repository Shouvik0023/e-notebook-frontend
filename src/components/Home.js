import React, { useContext,useEffect } from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import Noteitem from "./Noteitem";

import noteContext from "../context/notes/NoteContext";

function Home() {

  const context= useContext(noteContext);
  const {notes,getNotes} =context;
 


  

    useEffect(() => {
      getNotes();
      // eslint-disable-next-line
    },[])

    
        
  
  return (
    <>
      <div className="row">
        <div className="note">
          <Link className="circle" to="/addnote">
            <div className="plus1"></div>
            <div className="plus1 plus2"></div>
          </Link>
        </div>
           {notes.map((n)=>{
            return <Noteitem key={n._id} note={n}/>
           })}


      </div>
    </>
  );
}

export default Home;
