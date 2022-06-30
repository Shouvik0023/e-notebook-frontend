import React,{useContext} from 'react'
import noteContext from '../context/notes/NoteContext'
function About() {

  const a= useContext(noteContext);
  return (

    <div>{a.name}
   </div>
  )
}

export default About