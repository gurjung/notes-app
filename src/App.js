import "./App.css";
import { NotesList } from "./Components/NotesList.js";
import { useState } from "react";
import { nanoid } from "nanoid";
import { Search } from "./Components/Search.js";
import { MdDarkMode } from "react-icons/md";
import { MdOutlineDarkMode } from "react-icons/md";
function App() {
  const [notes, setNotes] = useState([
    { id: nanoid(), text: "Hello this is first note", date: "13/11/2021" },
    { id: nanoid(), text: "Hello this is second note", date: "13/11/2021" },
    { id: nanoid(), text: "Hello this is third note", date: "13/11/2021" },
    { id: nanoid(), text: "Hello this is fourth note", date: "13/11/2021" },
  ]);

  const [searchText, setSearchText] = useState("");
  const [darkMode, setDarkMode] = useState(false);
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

  const handleToggleMode = () => {
    setDarkMode(!darkMode);
  };
  return (
    <div className={`${darkMode ? "dark-mode" : "light-mode"}`}>
      <div className="container">
        <div className="container-header">
          <h1 className={`${darkMode ? "header" : ""}`}>Notes</h1>
          <div onClick={handleToggleMode}>
            {darkMode ? (
              <MdOutlineDarkMode size="2.3em" className="light-mode-icon" />
            ) : (
              <MdDarkMode size="2.3em" />
            )}
          </div>
        </div>
        <Search handleSearchInput={handleSearchInput} />
        <NotesList
          notes={notes.filter((note) =>
            note.text.toLowerCase().includes(searchText)
          )}
          handleAddNote={addNote}
          handleDeleteNote={deleteNote}
        />
      </div>
    </div>
  );
}

export default App;
