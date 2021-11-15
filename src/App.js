import "./App.css";
import { NotesList } from "./Components/NotesList.js";
import { useState } from "react";
import { nanoid } from "nanoid";
import { Search } from "./Components/Search.js";
function App() {
  const [notes, setNotes] = useState([
    { id: nanoid(), text: "Hello this is first note", date: "13/11/2021" },
    { id: nanoid(), text: "Hello this is second note", date: "13/11/2021" },
    { id: nanoid(), text: "Hello this is third note", date: "13/11/2021" },
    { id: nanoid(), text: "Hello this is fourth note", date: "13/11/2021" },
  ]);

  const [searchText, setSearchText] = useState("");
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

  const handleSearchInput = (e) => {
    setSearchText(e.target.value);
  };
  return (
    <div className="container">
      <Search handleSearchInput={handleSearchInput} />
      <NotesList
        notes={notes.filter((note) =>
          note.text.toLowerCase().includes(searchText)
        )}
        handleAddNote={addNote}
        handleDeleteNote={deleteNote}
      />
    </div>
  );
}

export default App;
