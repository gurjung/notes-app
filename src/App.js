import { useState, useEffect } from "react";
import NotesList from "./components/NotesList.js";
import Search from "./components/Search.js";
import {DarkModeIcon} from './icons/index'
import {LightModeIcon} from './icons/index'
import { nanoid } from "nanoid";
import "./App.css";

const App=()=>{
  const [notes, setNotes] = useState(() => {
    const savedNotes = JSON.parse(localStorage.getItem("notes-app-data"));
    return (
      savedNotes || [
        { id: nanoid(), text: "Hello this is first note", date: "13/11/2021" },
        { id: nanoid(), text: "Hello this is second note", date: "13/11/2021" },
        { id: nanoid(), text: "Hello this is third note", date: "13/11/2021" },
        { id: nanoid(), text: "Hello this is fourth note", date: "13/11/2021" },
      ]
    );
  });

  const [searchText, setSearchText] = useState("");
  const [IsDarkMode, setIsDarkMode] = useState(false);

  //local storage feature
  useEffect(() => {
    console.log("inside setItem");
    localStorage.setItem("notes-app-data", JSON.stringify(notes));
  }, [notes]);

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

  const handleDarkMode = () => {
    setIsDarkMode(!IsDarkMode);
  };
  return (
    <div className={`${IsDarkMode && "dark-mode"}`}>
      <div className="container">
        <div className="container-header">
          <h1 className={`${IsDarkMode ? "header" : ""}`}>Notes</h1>
          <div onClick={handleDarkMode}>
            {IsDarkMode ? (
              <LightModeIcon size="2.3em" className="light-mode-icon" />
            ) : (
              <DarkModeIcon size="2.3em" />
            )}
          </div>
        </div>
        <Search handleSearchInput={setSearchText} />
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
