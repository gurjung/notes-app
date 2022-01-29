import React from "react";
import Note from "./Note.js";
import AddNote from "./AddNote.js";

const NotesList = ({ notes, handleAddNote, handleDeleteNote }) => {
  return (
    <div className="notes-list">
      {notes.map((item) => (
        <Note
          key={item.id}
          id={item.id}
          text={item.text}
          date={item.date}
          handleDeleteNote={handleDeleteNote}
        />
      ))}
      <AddNote handleAddNote={handleAddNote} />
    </div>
  );
};

export default NotesList
