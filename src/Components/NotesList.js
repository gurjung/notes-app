import React from "react";
import { Note } from "./Note.js";
export const NotesList = ({ notes }) => {
  return (
    <div className="notes-list">
      {notes.map((item)=>(
          <Note id={item.id} text={item.text} date={item.date}/>
      ))}
    </div>
  );
};
