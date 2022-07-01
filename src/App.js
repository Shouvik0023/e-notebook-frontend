import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NoteState from "./context/notes/NoteState";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Addnote from "./components/Addnote";
import Note from "./components/Note";
import Editnote from "./components/Editnote";

function App() {
  return (
    <BrowserRouter>
    <NoteState>
      <Navbar />
      <div className="container">
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/signup" element={<Signup />} />
        <Route exact path="/addnote" element={<Addnote />} />
        <Route exact path="/note" element={<Note/>} />
        <Route exact path="/editnote" element={<Editnote/>} />



      </Routes>
      </div>
      </NoteState>
    </BrowserRouter>
  );
}

export default App;
