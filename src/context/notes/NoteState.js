import React,{useState} from "react";
import Notecontext from "./NoteContext";

const NoteState = (props)=>{
    const notesInitial =[]
      
    
      const [notes, setnotes] = useState(notesInitial)

      //fetch all notes
      const getNotes =async ()=>{
        const response= await fetch(`http://localhost:5000/api/notes/fetchallnotes`,{method:"GET",headers:{
            "Content-Type": "application/json",
            "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjJiZDc0YTllZDUzNDBiNTNiNzM1MGMzIn0sImlhdCI6MTY1NjU4MzMzN30.c9JPTgoXAk-kxBzB-N5EGJjItWqiA_UgQHsTU2PCclE"
          },
        })

        const json =await response.json();
            
        setnotes(json)

    }
      

    //Add a note
     const addNote =async (title,description,tag)=>{

        const response= await fetch(`http://localhost:5000/api/notes/addnotes`,{method:"POST",headers:{
            "Content-Type": "application/json",
            "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjJiZDc0YTllZDUzNDBiNTNiNzM1MGMzIn0sImlhdCI6MTY1NjU4MzMzN30.c9JPTgoXAk-kxBzB-N5EGJjItWqiA_UgQHsTU2PCclE"
              },
          body: JSON.stringify({title,description,tag})
        })

        const note =await response.json();
         

         setnotes(notes.concat(note))
     }

     //delete a note
     const deleteNote =async (id)=>{
         await fetch(`http://localhost:5000/api/notes/deletenote/${id}`,{method:"DELETE",headers:{
            "Content-Type": "application/json",
            "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjJiZDc0YTllZDUzNDBiNTNiNzM1MGMzIn0sImlhdCI6MTY1NjU4MzMzN30.c9JPTgoXAk-kxBzB-N5EGJjItWqiA_UgQHsTU2PCclE"
          }
        })

            
        const newnotes = notes.filter((note)=>{return note._id!==id})
        setnotes(newnotes);

    }

    //edit anote
    const editNote =async (id,title,description,tag)=>{

           await fetch(`http://localhost:5000/api/notes/updatenote/${id}`,{method:"PUT",headers:{
            "Content-Type": "application/json",
            "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjJiZDc0YTllZDUzNDBiNTNiNzM1MGMzIn0sImlhdCI6MTY1NjU4MzMzN30.c9JPTgoXAk-kxBzB-N5EGJjItWqiA_UgQHsTU2PCclE"
          },
          body: JSON.stringify({title,description,tag})
        })
           
        let newNotes = JSON.parse(JSON.stringify(notes))
       for(let index=0;index<newNotes.length;index++)
       {
        const element= newNotes[index];
        if(element._id===id)
        {
            newNotes.title=title;
            newNotes.description=description;
            newNotes.tag=tag;
        }
       }

       setnotes(newNotes);
    }
     return(

           <Notecontext.Provider value={{notes, addNote,deleteNote,editNote,getNotes}}>
            {props.children}
           </Notecontext.Provider>
     )

}

export default NoteState;