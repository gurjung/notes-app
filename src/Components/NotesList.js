import React from "react";
import { Note } from "./Note.js";
import { AddNote } from "./AddNote.js";
export const NotesList = ({ notes, handleAddNote }) => {
  return (
    <div className="notes-list">
      {notes.map((item) => (
        <Note id={item.id} text={item.text} date={item.date} />
      ))}
      <AddNote handleAddNote={handleAddNote} />
    </div>
  );
};
