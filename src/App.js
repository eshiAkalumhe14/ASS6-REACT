import "./index.css"
import uuid from "react-uuid";
import Sidebar from "./Sidebar";
import Main from "./Main";
import {useState} from "react";
import Header from "./Header";




function App() {
  const [notes, setNotes] = useState([]);

  const [activeNote, setActiveNote] = useState(false);

  const [isShowing, setIsShowing] = useState(true);



  //addNotes -
  const onAddNote = () => {
    const newNote = {
      id: uuid(),
      title: "Untitled Note",
      body: "",
      lastModified: Date.now()
    };


    setNotes([newNote, ...notes]);
    setActiveNote(newNote.id);
  };

  const onUpdateNote = (updatedNote) => {
    const updatedNotesArray = notes.map((note) => {
      if(note.id === activeNote) {
        return updatedNote;
      }

      return note;
    })

    setNotes(updatedNotesArray);
    
  };

  const onDeleteNote = (idToDelete) => {
    const answer = window.confirm("Are you sure?");
    if (answer) {
      setNotes(notes.filter((note) => note.id !== idToDelete));
    }
  };


  const getActiveNote = () => {
    return notes.find((note) => note.id === activeNote);
  };


  const onToggle = () => {
    setIsShowing(!isShowing);
  };



  return (
    <>
    <Header onToggle={onToggle}/>

    <div className = "App">

    {isShowing && (
          <Sidebar 
          notes = {notes} 
          onAddNote = {onAddNote} 
          onDeleteNote = {onDeleteNote}
          activeNote ={activeNote}
          setActiveNote = {setActiveNote}/>
        )}

      

      <Main activeNote={getActiveNote()} onUpdateNote = {onUpdateNote}/>

      

    </div>
    </>
  );

}

export default App;