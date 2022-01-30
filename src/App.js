import { useState, useEffect } from "react";
import NotesList from "./components/NotesList.js";
import Search from "./components/Search.js";
import SideBar from "./components/SideBar/SideBar.js";
import { DarkModeIcon } from "./icons/index";
import { LightModeIcon } from "./icons/index";
import { TEXTS } from "./constants";
import { COLORS } from "./constants";
import { nanoid } from "nanoid";
import "./App.css";

const App = () => {
  const [notes, setNotes] = useState(() => {
    const savedNotes = JSON.parse(localStorage.getItem("notes-app-data"));
    return (
      savedNotes || [
        {
          id: nanoid(),
          text: TEXTS.INITIAL_NOTE_DESCRIPTION,
          date: TEXTS.INITIAL_DATE,
          Color: COLORS.LIGHT_GREEN,
        },
      ]
    );
  });

  const [searchText, setSearchText] = useState("");
  const [IsDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    localStorage.setItem("notes-app-data", JSON.stringify(notes));
  }, [notes]);

  const addNote = (color) => {
    const today = new Date();

    const newNotes = [...notes];
    newNotes.push({
      id: nanoid(),
      text: "",
      date: today.toLocaleDateString(),
      color: color,
    });
    setNotes(newNotes);
  };

  const deleteNote = (id) => {
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
  };

  const handleDarkMode = () => {
    setIsDarkMode(!IsDarkMode);
  };
  const updateText = (text, id) => {
    const tempNotes = [...notes];

    const index = tempNotes.findIndex((item) => item.id === id);
    if (index < 0) return;

    tempNotes[index].text = text;
    setNotes(tempNotes);
  };
  return (
    <div className={`${IsDarkMode && "dark-mode"}`}>
      <div className="container">
        <div className="container-header">
          <h1 className={`${IsDarkMode ? "header-active" : "header"}`}>
            {TEXTS.APP_HEADING}
          </h1>
          <div onClick={handleDarkMode}>
            {IsDarkMode ? (
              <LightModeIcon size="2.3em" className="light-mode-icon" />
            ) : (
              <DarkModeIcon size="2.3em" color="#41424C" />
            )}
          </div>
        </div>
        <Search handleSearchInput={setSearchText} />
        <div className="notes-container">
          <SideBar addNote={addNote} />
          <NotesList
            notes={notes.filter((note) =>
              note.text.toLowerCase().includes(searchText)
            )}
            handleDeleteNote={deleteNote}
            updateText={updateText}
          />
        </div>
      </div>
    </div>
  );
};

export default App;
