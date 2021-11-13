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
  return (
    <div className="container">
      <NotesList notes={notes}/>
    </div>
  );
}

export default App;
