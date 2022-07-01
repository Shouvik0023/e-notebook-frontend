import React,{useContext} from 'react'
import noteContext from '../context/notes/NoteContext'
function About() {

  const a= useContext(noteContext);
  return (

    <div style={{height: "30vh",border:"2px solid black",top:"15vh",position:"absolute",width:"30vh"}}>
      <h5>title</h5>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, et! Eligendi ut consequatur fugiat blanditiis consequuntur laborum voluptate optio pariatur!</p>
   </div>
  )
}

export default About