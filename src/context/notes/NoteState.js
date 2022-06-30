import React from "react";
import Notecontext from "./NoteContext";

const NoteState = (props)=>{

    const state = {
        "name" : "Shouvik",
        "age"  : 23
    }

     return(

           <Notecontext.Provider value={state}>
            {props.children}
           </Notecontext.Provider>
     )

}

export default NoteState;