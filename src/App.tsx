import { useState, useEffect } from "react";
import { NotesList, Search, SideBar } from "./components";
import { DarkModeIcon, LightModeIcon } from "./icons/index";
import { TEXTS, COLORS } from "./constants";
import { nanoid } from "nanoid";
import { TNote } from "./types/interfaces";
import "./App.css";

const App: React.FC = () => {
  const [notes, setNotes] = useState<TNote[]>(() => {
    const storageItem = localStorage.getItem("notes-app-data");
    const savedNotes =
      typeof storageItem === "string" ? JSON.parse(storageItem) : null;
    return (
      savedNotes || [
        {
          id: nanoid(),
          text: TEXTS.INITIAL_NOTE_DESCRIPTION,
          date: TEXTS.INITIAL_DATE,
          time: "5:04:40 PM",
          Color: COLORS.LIGHT_GREEN,
        },
      ]
    );
  });

  const [searchText, setSearchText] = useState<string>("");
  const [IsDarkMode, setIsDarkMode] = useState<boolean>(false);

  useEffect(() => {
    localStorage.setItem("notes-app-data", JSON.stringify(notes));
  }, [notes]);

  const addNote = (color: string) => {
    const today = new Date();
    const date = today.toLocaleDateString();
    const time = today.toLocaleTimeString();
    const newNotes = [...notes];
    newNotes.push({
      id: nanoid(),
      text: "",
      date: date,
      time: time,
      color: color,
    });
    setNotes(newNotes);
  };

  const deleteNote = (id: string) => {
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
  };

  const handleDarkMode = () => {
    IsDarkMode
      ? document.body.classList.remove("dark-mode")
      : document.body.classList.add("dark-mode");
    setIsDarkMode(!IsDarkMode);
  };
  const updateText = (text: string, id: string) => {
    const tempNotes = [...notes];

    const index = tempNotes.findIndex((item) => item.id === id);
    if (index < 0) return;

    tempNotes[index].text = text;
    setNotes(tempNotes);
  };
  return (
    <div className="container">
      <div className="container-header">
        <h1 className={`${IsDarkMode ? "header-active" : "header"}`}>
          {TEXTS.APP_HEADING}
        </h1>
        <div onClick={handleDarkMode}>
          {IsDarkMode ? (
            <LightModeIcon size="2.3em" className="light-mode-icon" />
          ) : (
            <DarkModeIcon size="2.3em" color={COLORS.DARK_GREY} />
          )}
        </div>
      </div>
      <Search handleSearchInput={setSearchText} />
      <div className="notes-container">
        <SideBar addNote={addNote} IsDarkMode={IsDarkMode} />
        <NotesList
          notes={notes.filter((note) =>
            note?.text?.toLowerCase().includes(searchText)
          )}
          deleteNote={deleteNote}
          updateText={updateText}
        />
      </div>
    </div>
  );
};

export default App;
