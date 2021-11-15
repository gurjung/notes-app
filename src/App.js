import "./App.css";
import { NotesList } from "./Components/NotesList.js";
import { useState } from "react";
import { nanoid } from "nanoid";
function App() {
  const [notes, setNotes] = useState([
    { id: nanoid(), text: "Hello this is first note", date: "13/11/2021" },
    { id: nanoid(), text: "Hello this is second note", date: "13/11/2021" },
    { id: nanoid(), text: "Hello this is third note", date: "13/11/2021" },
    { id: nanoid(), text: "Hello this is fourth note", date: "13/11/2021" },
  ]);

  const addNote = (text) => {
    const today = new Date();
    const newNote = {
      id: nanoid(),
      text: text,
      date: today.toLocaleDateString(),
    };
    const newNotes = [...notes, newNote];
    setNotes(newNotes);
  };

  const deleteNote = (id) => {
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
  };
  return (
    <div className="container">
      <NotesList
        notes={notes}
        handleAddNote={addNote}
        handleDeleteNote={deleteNote}
      />
    </div>
  );
}

export default App;
